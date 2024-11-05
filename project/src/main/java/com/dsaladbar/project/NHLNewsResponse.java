package com.dsaladbar.project;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import java.util.List;

@JsonIgnoreProperties(ignoreUnknown = true)
public record NHLNewsResponse(List<Articles> articles) {
}
