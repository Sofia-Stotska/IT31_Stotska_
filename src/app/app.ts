import { Component } from '@angular/core';
import { Header } from './components/header/header';
import { News } from './components/news/news';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [Header, News, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  siteName = 'Новини Онлайн';
}