package com.dsaladbar.project;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public record Articles(String description, String headline, Links links, String dataSourceIdentifier) {
}
