package com.sashazhenia.vocabulary.repository;

import com.sashazhenia.vocabulary.model.WordItem;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface WordRepository extends MongoRepository<WordItem, String> {

    long count();

}
