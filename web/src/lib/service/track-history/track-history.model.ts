import type { Track } from '../track/track.model.js'

export type TrackHistoryEntry = {
  track: Track
  playedAt: Date
}

export type TrackHistory = TrackHistoryEntry[]
