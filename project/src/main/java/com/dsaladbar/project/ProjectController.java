package com.dsaladbar.project;

import org.springframework.http.HttpMethod;
import org.springframework.http.HttpRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import java.net.URI;
import java.net.URL;
import java.util.List;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:5173")
public class ProjectController {

    @GetMapping("/hockey")
//    @CrossOrigin(origins = "http://localhost:5173")
    public ResponseEntity<List<TeamStandings>> getHockey() {
        String url = "https://api-web.nhle.com/v1/standings/now";
        RestTemplate restTemplate = new RestTemplate();

        StandingsResponse response = restTemplate.getForObject(url, StandingsResponse.class);

        return ResponseEntity.ok(response != null ? response.getStandings() : null);
    }

    @GetMapping("/hockey/news")
    public ResponseEntity<List<Articles>> getHockeyNews() {
        String url = "http://site.api.espn.com/apis/site/v2/sports/hockey/nhl/news?limit=10";
        RestTemplate restTemplate = new RestTemplate();

        NHLNewsResponse response = restTemplate.getForObject(url, NHLNewsResponse.class);

        return ResponseEntity.ok(response != null ? response.articles() : null);
    }

}
