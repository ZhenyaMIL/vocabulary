package com.sashazhenia.vocabulary.model;

import lombok.Builder;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;

import java.time.LocalDateTime;
import java.util.List;

@Document("englishWord")
@Data
@Builder
public class EnglishWord {

        @Id
        private String id;

        private String englishWord;

        @DocumentReference(lazy = true)
        private List<CyrillicWord> cyrillicWords;

        private LocalDateTime lastUpdate;

        private LocalDateTime created;

        private WordStatus status;

        private Integer rightAnswersCount;

        private Integer timesWordAppeared;

}
