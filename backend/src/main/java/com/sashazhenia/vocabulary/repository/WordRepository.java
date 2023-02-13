package com.sashazhenia.vocabulary.repository;

import com.sashazhenia.vocabulary.model.EnglishWord;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface WordRepository extends MongoRepository<EnglishWord, String> {

    long count();

}
