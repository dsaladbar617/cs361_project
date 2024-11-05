package com.dsaladbar.project;

import com.fasterxml.jackson.annotation.JsonProperty;

public class TeamName {

    @JsonProperty("default")
    private String defaultName;

    private String fr;

    public String getDefaultName() {
        return defaultName;
    }

    public void setDefaultName(String defaultName) {
        this.defaultName = defaultName;
    }

    public String getFr() {
        return fr;
    }

    public void setFr(String fr) {
        this.fr = fr;
    }
}
