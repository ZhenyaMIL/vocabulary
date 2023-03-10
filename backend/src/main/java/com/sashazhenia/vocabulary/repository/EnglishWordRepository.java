package com.sashazhenia.vocabulary.repository;

import com.sashazhenia.vocabulary.model.EnglishWord;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface EnglishWordRepository extends MongoRepository<EnglishWord, String> {

    long count();

    EnglishWord findByEnglishWord(String englishWord);

}
