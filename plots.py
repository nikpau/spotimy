from typing import Sequence, BinaryIO
import matplotlib
import matplotlib.pyplot as plt

from app import TopArtist

def top_10_artists(topartists: Sequence[TopArtist]) -> BinaryIO:
    artists, counts = [],[]
    for artist,count in topartists[:10]:
        artists.append(artist)
        counts.append(count)
        
    fig, ax = plt.subplots(figsize=(12,5))
    ax.bar(artists,counts)
    plt.savefig("out/Top10Artists.pdf")
    