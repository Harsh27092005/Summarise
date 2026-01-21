package com.research_assistant;

import lombok.Data;

@Data
public class ResearchRequest {
    private String operation; // "summarize" or "suggest"
    private String content;   // User-provided text
}
