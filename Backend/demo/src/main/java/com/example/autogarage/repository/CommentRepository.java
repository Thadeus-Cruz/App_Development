package com.example.autogarage.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.autogarage.model.Comment;

public interface CommentRepository extends JpaRepository<Comment, Long> {
}
