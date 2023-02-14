package com.sashazhenia.vocabulary.repository;

import com.sashazhenia.vocabulary.model.CyrillicWord;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface CyrillicWordRepository extends MongoRepository<CyrillicWord, String> {

    CyrillicWord findByName(String name);

}
