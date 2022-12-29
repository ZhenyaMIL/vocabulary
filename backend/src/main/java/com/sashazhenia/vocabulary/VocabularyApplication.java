package com.sashazhenia.vocabulary;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@SpringBootApplication
@EnableMongoRepositories
public class VocabularyApplication {
	public static void main(String[] args) {
		SpringApplication.run(VocabularyApplication.class, args);
	}

}
