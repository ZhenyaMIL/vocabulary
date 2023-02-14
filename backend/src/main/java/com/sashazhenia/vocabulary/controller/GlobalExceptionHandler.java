package com.sashazhenia.vocabulary.controller;

import com.sashazhenia.vocabulary.exception.CyrillicSymbolsInEnglishWordException;
import com.sashazhenia.vocabulary.exception.CyrillicWordAlreadyExistsException;
import com.sashazhenia.vocabulary.exception.SimpleError;
import jakarta.validation.ConstraintViolationException;
import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.HttpServerErrorException;
import org.springframework.web.context.request.RequestAttributes;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.util.WebUtils;

@ControllerAdvice
@Order(Ordered.HIGHEST_PRECEDENCE)
public class GlobalExceptionHandler {

    @ExceptionHandler({
            HttpClientErrorException.BadRequest.class,
            MethodArgumentNotValidException.class,
            ConstraintViolationException.class,
            CyrillicSymbolsInEnglishWordException.class,
            CyrillicWordAlreadyExistsException.class
    })
    public final ResponseEntity<SimpleError> handleBadRequest(Exception ex) {
        return new ResponseEntity<>(SimpleError.builder()
                .key(HttpStatus.BAD_REQUEST.name())
                .message(ex.getMessage())
                .build(),
                HttpStatus.BAD_REQUEST
        );
    }

    @ExceptionHandler({
            HttpServerErrorException.InternalServerError.class,
            IllegalArgumentException.class
    })
    public final ResponseEntity<SimpleError> handleInternalServerErrorRequest(Exception ex, WebRequest request) {
        request.setAttribute(WebUtils.ERROR_EXCEPTION_ATTRIBUTE, ex, RequestAttributes.SCOPE_REQUEST);

        return new ResponseEntity<>(SimpleError.builder()
                .key(HttpStatus.INTERNAL_SERVER_ERROR.name())
                .message(ex.getMessage())
                .build(),
                HttpStatus.INTERNAL_SERVER_ERROR
        );
    }

}
