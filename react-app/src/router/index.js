// 1.引入方法，用于创建路由实例
import { createBrowserRouter } from 'react-router-dom';

// 2.引入组件
import HomePage from '../pages/home';
import UserPage from '../pages/user/index';
import LoginPage from '../pages/user/login';
import EditPage from '../pages/user/edit';

import AboutPage from '../pages/base/about';
import DrinksPage from '../pages/base/drinks';
import RecipesPage from '../pages/base/recipes';
import PoemPage from '../pages/base/poem';
import PackPage from '../pages/base/pack';
import LetterPage from '../pages/base/letter';
import EmailPage from '../pages/base/email';
import SculpturePage from '../pages/base/sculpture';
import FormPage from '../pages/base/form';
import TrackerPage from '../pages/base/tracker';
import CasePage from '../pages/base/case';
import ScorePage from '../pages/base/score';
import ProductPage from '../pages/base/product';
import ShoppingPage from '../pages/base/shopping';

import MessengerPage from '../pages/advanced/Messenger';
import Messenger2Page from '../pages/advanced/Messenger2';
import PlacesPage from '../pages/advanced/Places';
import TasksPage from '../pages/advanced/Tasks';
import SearchPage from '../pages/advanced/Search';
import TodoPage from '../pages/advanced/Todo';
import Todo2Page from '../pages/advanced/Todo2';
import ChatPage from '../pages/advanced/Chat';
import MovePage from '../pages/advanced/Move';
import TimerPage from '../pages/advanced/Timer';
import WelcomePage from '../pages/advanced/Welcome';

// 模块化路由配置
const userRoutes = [
  {
    path: "",
    element: <UserPage />,
  },
  {
    path: "edit",
    element: <EditPage />,
  },
];

const baseRoutes = [
  { path: "about", element: <AboutPage />, name: "about" },
  { path: "drinks", element: <DrinksPage />, name: "drinks" },
  { path: "recipes", element: <RecipesPage />, name: "recipes" },
  { path: "poem", element: <PoemPage />, name: "poem" },
  { path: "pack", element: <PackPage />, name: "pack" },
  { path: "letter", element: <LetterPage />, name: "letter" },
  { path: "email", element: <EmailPage />, name: "email" },
  { path: "sculpture", element: <SculpturePage />, name: "sculpture" },
  { path: "form", element: <FormPage />, name: "form" },
  { path: "tracker", element: <TrackerPage />, name: "tracker" },
  { path: "case", element: <CasePage />, name: "case" },
  { path: "score", element: <ScorePage />, name: "score" },
  { path: "product", element: <ProductPage />, name: "product" },
  { path: "shopping", element: <ShoppingPage />, name: "shopping" },
].map(route => ({ ...route, path: `/base/${route.path}` }));

const advancedRoutes = [
  { path: "messenger", element: <MessengerPage />, name: "messenger" },
  { path: "messenger2", element: <Messenger2Page />, name: "messenger2" },
  { path: "places", element: <PlacesPage />, name: "places" },
  { path: "tasks", element: <TasksPage />, name: "tasks" },
  { path: "search", element: <SearchPage />, name: "search" },
  { path: "todo", element: <TodoPage />, name: "todo" },
  { path: "todo2", element: <Todo2Page />, name: "todo2" },
  { path: "chat", element: <ChatPage />, name: "chat" },
  { path: "move", element: <MovePage />, name: "move" },
  { path: "timer", element: <TimerPage />, name: "timer" },
  { path: "welcome", element: <WelcomePage />, name: "welcome" },
].map(route => ({ ...route, path: `/advanced/${route.path}` }));

// 3.创建router实例，配置路由
const router = createBrowserRouter([
  {
    path: "/login/:id/:name",
    element: <LoginPage />,
  },
  {
    path: "/user",
    children: userRoutes,
  },
  ...baseRoutes,
  ...advancedRoutes,
  {
    path: "",
    element: <HomePage />,
  },
]);

// 4.暴露路由实例，用于在App.js主入口组件
export default router;