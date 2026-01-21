package com.research_assistant;

import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/research") // fixed typo too
@CrossOrigin(origins = "*")

public class ResearchController {

    private final ResearchService researchService;

    private ResearchController(ResearchService researchService) {
        this.researchService = researchService;
    }

    @PostMapping("/process") // fixed typo 'preocess'
    public ResponseEntity<String> processContent(@RequestBody ResearchRequest request) {
        String result = researchService.processContent(request);
        return ResponseEntity.ok(result);
    }
}
