package com.example.autogarage.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.autogarage.model.Post;
import com.example.autogarage.repository.PostRepository;
import java.util.List;
import java.util.Optional;

@Service
public class PostService {
    @Autowired
    private PostRepository postRepository;

    public List<Post> getAllPosts() {
        return postRepository.findAll();
    }

    public Optional<Post> getPostById(Long id) {
        return postRepository.findById(id);
    }

    public Post savePost(Post post) {
        return postRepository.save(post);
    }

    public void deletePost(Long id) {
        postRepository.deleteById(id);
    }

    public Post updatePost(Long id, Post postDetails) {
        Optional<Post> optionalPost = postRepository.findById(id);
        if (optionalPost.isPresent()) {
            Post post = optionalPost.get();
            post.setCustomer(postDetails.getCustomer());
            post.setQuestion(postDetails.getQuestion());
            post.setTimestamp(postDetails.getTimestamp());
            return postRepository.save(post);
        }
        return null;
    }

    public List<Post> getPostsByCustomerId(Long customerId) {
        return postRepository.findByCustomerId(customerId);
    }
}
