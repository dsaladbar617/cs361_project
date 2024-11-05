package com.dsaladbar.project;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public record TeamStandings(String conferenceName, String divisionName, String gamesPlayed, int wins, int losses, int ties, int otLosses, int leagueSequence, int points, TeamName teamName) {
}
