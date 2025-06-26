import React, { useState, useEffect, useCallback } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { 
  Plus, 
  Edit, 
  Trash2, 
  Calendar, 
  Tag, 
  LogOut, 
  Save, 
  X,
  Eye
} from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  slug: string;
  content: string;
  image_url?: string;
  tags: string[];
  created_at: string;
  updated_at: string;
}

const AdminBlog: React.FC = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    image_url: '',
    tags: ''
  });

  const API_BASE_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000';

  // Загрузка статей
  const fetchPosts = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch(`${API_BASE_URL}/api/blog?per_page=50`);
      if (!response.ok) throw new Error('Failed to fetch posts');

      const data = await response.json();
      setPosts(data.posts);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  }, [API_BASE_URL]);

  // Проверка авторизации
  useEffect(() => {
    const token = localStorage.getItem('admin_token');
    if (!token) {
      navigate('/admin/login');
      return;
    }
    fetchPosts();
  }, [navigate, fetchPosts]);

  // Получение токена для запросов
  const getAuthHeaders = () => ({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('admin_token')}`
  });

  // Выход из админки
  const handleLogout = () => {
    localStorage.removeItem('admin_token');
    localStorage.removeItem('admin_username');
    navigate('/admin/login');
  };

  // Обработка формы
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Создание статьи
  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.title || !formData.content) {
      setError('Заполните заголовок и содержание');
      return;
    }

    try {
      setLoading(true);
      const response = await fetch(`${API_BASE_URL}/api/blog`, {
        method: 'POST',
        headers: getAuthHeaders(),
        body: JSON.stringify({
          ...formData,
          tags: formData.tags ? formData.tags.split(',').map(tag => tag.trim()) : []
        }),
      });

      if (response.ok) {
        setIsCreateDialogOpen(false);
        setFormData({ title: '', content: '', image_url: '', tags: '' });
        fetchPosts();
      } else {
        const data = await response.json();
        setError(data.error || 'Ошибка создания статьи');
      }
    } catch (err) {
      setError('Ошибка соединения с сервером');
    } finally {
      setLoading(false);
    }
  };

  // Редактирование статьи
  const handleEdit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!editingPost || !formData.title || !formData.content) {
      setError('Заполните заголовок и содержание');
      return;
    }

    try {
      setLoading(true);
      const response = await fetch(`${API_BASE_URL}/api/blog/${editingPost.id}`, {
        method: 'PUT',
        headers: getAuthHeaders(),
        body: JSON.stringify({
          ...formData,
          tags: formData.tags ? formData.tags.split(',').map(tag => tag.trim()) : []
        }),
      });

      if (response.ok) {
        setEditingPost(null);
        setFormData({ title: '', content: '', image_url: '', tags: '' });
        fetchPosts();
      } else {
        const data = await response.json();
        setError(data.error || 'Ошибка обновления статьи');
      }
    } catch (err) {
      setError('Ошибка соединения с сервером');
    } finally {
      setLoading(false);
    }
  };

  // Удаление статьи
  const handleDelete = async (postId: number) => {
    if (!confirm('Вы уверены, что хотите удалить эту статью?')) return;

    try {
      setLoading(true);
      const response = await fetch(`${API_BASE_URL}/api/blog/${postId}`, {
        method: 'DELETE',
        headers: getAuthHeaders(),
      });

      if (response.ok) {
        fetchPosts();
      } else {
        const data = await response.json();
        setError(data.error || 'Ошибка удаления статьи');
      }
    } catch (err) {
      setError('Ошибка соединения с сервером');
    } finally {
      setLoading(false);
    }
  };

  // Открытие формы редактирования
  const openEditForm = (post: BlogPost) => {
    setEditingPost(post);
    setFormData({
      title: post.title,
      content: post.content,
      image_url: post.image_url || '',
      tags: post.tags.join(', ')
    });
  };

  // Форматирование даты
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('ru-RU', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (loading && posts.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Загружаем статьи...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Управление блогом - Prime Tech</title>
        <meta name="description" content="Административная панель для управления блогом" />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="min-h-screen bg-gray-50 py-12 pt-28">
        <div className="container mx-auto px-4">
          {/* Заголовок и кнопки */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Управление блогом</h1>
              <p className="text-gray-600 mt-2">
                Администратор: {localStorage.getItem('admin_username')}
              </p>
            </div>
            <div className="flex gap-4">
              <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
                <DialogTrigger asChild>
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Создать статью
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>Создать новую статью</DialogTitle>
                  </DialogHeader>
                  <form onSubmit={handleCreate} className="space-y-4">
                    <div>
                      <Label htmlFor="title">Заголовок *</Label>
                      <Input
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleInputChange}
                        placeholder="Введите заголовок статьи"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="content">Содержание *</Label>
                      <Textarea
                        id="content"
                        name="content"
                        value={formData.content}
                        onChange={handleInputChange}
                        placeholder="Введите содержание статьи"
                        rows={10}
                        required
                      />
                      <div className="text-xs text-muted-foreground mt-1">Поддерживается <b>Markdown</b>-разметка</div>
                    </div>
                    <div>
                      <Label htmlFor="image_url">Ссылка на изображение</Label>
                      <Input
                        id="image_url"
                        name="image_url"
                        value={formData.image_url}
                        onChange={handleInputChange}
                        placeholder="https://example.com/image.jpg"
                      />
                    </div>
                    <div>
                      <Label htmlFor="tags">Теги (через запятую)</Label>
                      <Input
                        id="tags"
                        name="tags"
                        value={formData.tags}
                        onChange={handleInputChange}
                        placeholder="ремонт, техника, советы"
                      />
                    </div>
                    <div className="flex justify-end gap-2">
                      <Button type="button" variant="outline" onClick={() => setIsCreateDialogOpen(false)}>
                        Отмена
                      </Button>
                      <Button type="submit" disabled={loading}>
                        {loading ? 'Создание...' : 'Создать'}
                      </Button>
                    </div>
                  </form>
                </DialogContent>
              </Dialog>
              
              <Button variant="outline" onClick={handleLogout}>
                <LogOut className="h-4 w-4 mr-2" />
                Выйти
              </Button>
            </div>
          </div>

          {/* Сообщение об ошибке */}
          {error && (
            <Alert variant="destructive" className="mb-6">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          {/* Список статей */}
          <div className="grid gap-6">
            {posts.map((post) => (
              <Card key={post.id}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{post.title}</CardTitle>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {formatDate(post.created_at)}
                        </div>
                        <div className="flex items-center gap-1">
                          <Tag className="h-4 w-4" />
                          {post.tags.length} тегов
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => window.open(`/blog/${post.slug}`, '_blank')}
                      >
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => openEditForm(post)}
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleDelete(post.id)}
                        className="text-red-600 hover:text-red-700"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.content.substring(0, 200)}...
                  </p>
                  {post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Диалог редактирования */}
          {editingPost && (
            <Dialog open={!!editingPost} onOpenChange={() => setEditingPost(null)}>
              <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>Редактировать статью</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleEdit} className="space-y-4">
                  <div>
                    <Label htmlFor="edit-title">Заголовок *</Label>
                    <Input
                      id="edit-title"
                      name="title"
                      value={formData.title}
                      onChange={handleInputChange}
                      placeholder="Введите заголовок статьи"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="edit-content">Содержание *</Label>
                    <Textarea
                      id="edit-content"
                      name="content"
                      value={formData.content}
                      onChange={handleInputChange}
                      placeholder="Введите содержание статьи"
                      rows={10}
                      required
                    />
                    <div className="text-xs text-muted-foreground mt-1">Поддерживается <b>Markdown</b>-разметка</div>
                  </div>
                  <div>
                    <Label htmlFor="edit-image_url">Ссылка на изображение</Label>
                    <Input
                      id="edit-image_url"
                      name="image_url"
                      value={formData.image_url}
                      onChange={handleInputChange}
                      placeholder="https://example.com/image.jpg"
                    />
                  </div>
                  <div>
                    <Label htmlFor="edit-tags">Теги (через запятую)</Label>
                    <Input
                      id="edit-tags"
                      name="tags"
                      value={formData.tags}
                      onChange={handleInputChange}
                      placeholder="ремонт, техника, советы"
                    />
                  </div>
                  <div className="flex justify-end gap-2">
                    <Button type="button" variant="outline" onClick={() => setEditingPost(null)}>
                      Отмена
                    </Button>
                    <Button type="submit" disabled={loading}>
                      {loading ? 'Сохранение...' : 'Сохранить'}
                    </Button>
                  </div>
                </form>
              </DialogContent>
            </Dialog>
          )}
        </div>
      </div>
    </>
  );
};

export default AdminBlog; 