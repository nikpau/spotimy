from typing import BinaryIO, List
import app
from spotipy import Spotify
from spotipy.oauth2 import SpotifyOAuth
import plots

# Init
scope = "user-library-read"
sp = Spotify(auth_manager=SpotifyOAuth(scope=scope))

# Test Barplot summary for Top10 Artists
def t_summary_plot(sp: Spotify)->BinaryIO:
    liked_songs = app.list_liked_songs(sp)
    topArtists = app.top_artists(liked_songs)
    plots.top_10_artists(topArtists)
#t_summary_plot(sp)

def t_list_all_songs(sp: Spotify) -> List[app.Track]:
    print(app.list_all_songs(sp))
