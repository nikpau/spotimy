import pickle
from typing import List, Sequence, BinaryIO, Tuple
import matplotlib
import matplotlib.dates as mdates
import matplotlib.pyplot as plt
from _types import Track, TimeStamp
from datetime import datetime, timedelta

from app import TopArtist

def top_10_artists(topartists: Sequence[TopArtist]) -> BinaryIO:
    artists, counts = [],[]
    for artist,count in topartists[:10]:
        artists.append(artist)
        counts.append(count)
        
    fig, ax = plt.subplots(figsize=(12,5))
    ax.bar(artists,counts)
    plt.savefig("out/Top10Artists.pdf")
    
def bpm_timeseries(songs: Sequence[Tuple[Track,TimeStamp]], test: bool = False) -> BinaryIO:
    
    # For testing
    if test:
        with open ('outfile', 'rb') as fp:
            songs = pickle.load(fp)
    
    ts = [datetime.fromisoformat(d[:-1]) for _,d in songs]
    bpms = [s.bpm for s,_ in songs]
    ts1, bpms1 = _equitemporal_bpm_average(ts,bpms,2)
    
    fig, ax = plt.subplots(figsize=(8,4))
    
    ax.plot(
        ts,bpms,
        marker="o",linewidth = 3,
        c = "#a3b18a", label="raw"
    )    
    ax.plot(
        ts1,bpms1,
        marker="o",linewidth = 3,
        c = "#bc4749", label="Equitemporal average"
    )
    myFmt = mdates.DateFormatter('%d.%m\n%H:%M')
    ax.xaxis.set_major_formatter(myFmt)
    ax.legend()
    plt.tight_layout()
    plt.savefig("out/bpmts.pdf")
    
def _equitemporal_bpm_average(
    ts: Sequence[datetime],
    vals: Sequence[float], 
    hours_per_bin: int = 1,
    is_sorted: bool = False) -> Tuple[List[datetime],List[float]]:
    """Divides the ``datetime`` sequence into bins of size 
    ``hours_per_bin`` and computes the average bpm for
    each bin. 
    
    This function sorts the input arrays by default.
    If data is sorted by date in ascending order
    sorting can be skipped by setting ``is_sorted``
    to True.
    """
    
    assert len(ts)==len(vals),"Input arrays must be of equal length."
    if not is_sorted:
        sort_idx = sorted(range(len(ts)),key=ts.__getitem__)
        ts = [ts[i] for i in sort_idx]
        vals = [vals[i] for i in sort_idx]
    avg_ts, avg_bpms = [],[]
    td = timedelta
    timediff = ts[-1] - ts[0]
    nbins = timediff.total_seconds()/(60*60*hours_per_bin) + 1
    _bpm = []
    for bin in range(int(nbins)):
        for i, date in enumerate(ts):
            if (date <= ts[0] + td(hours=hours_per_bin*(bin+1)) and
                date >= ts[0] + td(hours=hours_per_bin*(bin))):
                _bpm.append(vals[i])
              
        meanbpm = sum(_bpm)/len(_bpm) if _bpm else avg_bpms[-1]
        mean_time = ts[0] + td( # current time + half binsize
            minutes=hours_per_bin*(bin+1)*60-hours_per_bin*60/2
        )
        avg_ts.append(mean_time)
        avg_bpms.append(meanbpm)
        _bpm = []
    return avg_ts, avg_bpms