from django.test import TestCase
from django.contrib.auth.models import User
from .models import Post

class PostModelTest(TestCase):

    def setUp(self):
        self.user = User.objects.create_user(username='testuser', password='password')
        self.post = Post.objects.create(title='Test Post', content='This is a test post.', author=self.user)

    def test_slug_generation(self):
        self.assertEqual(self.post.slug, 'test-post')

    def test_author_can_delete_post(self):
        self.client.login(username='testuser', password='password')
        response = self.client.delete(f'/api/posts/{self.post.slug}/')
        self.assertEqual(response.status_code, 204)  # No Content
        self.assertEqual(Post.objects.count(), 0)
