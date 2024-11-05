package com.dsaladbar.project;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.List;

public class StandingsResponse {
    @JsonProperty("wildCardIndicator")
    private boolean wildCardIndicator;

    @JsonProperty("standings")
    private List<TeamStandings> standings;

    public boolean isWildCardIndicator() {
        return wildCardIndicator;
    }

    public void setWildCardIndicator(boolean wildCardIndicator) {
        this.wildCardIndicator = wildCardIndicator;
    }

    public List<TeamStandings> getStandings() {
        return standings;
    }

    public void setStandings(List<TeamStandings> standings) {
        this.standings = standings;
    }

    @Override
    public String toString() {
        final StringBuffer sb = new StringBuffer("StandingsResponse{");
        sb.append("wildCardIndicator=").append(wildCardIndicator);
        sb.append(", standings=").append(standings);
        sb.append('}');
        return sb.toString();
    }
}
