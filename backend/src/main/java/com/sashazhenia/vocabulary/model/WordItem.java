package com.sashazhenia.vocabulary.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;

@Document("word")
@Data
public class WordItem {

        @Id
        private String id;

        private String englishName;

        private String russianWord;

        private Boolean isDifficult;

        private LocalDateTime lastUpdate;

        private WordStatus status;

}
