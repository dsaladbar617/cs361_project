package com.dsaladbar.project;

public record Links(Web web, Api api) {
}

record Web(String href) {
}

record Api(News news) {}

record News(String href) {}