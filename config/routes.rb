Fremo::Application.routes.draw do
  root :to => 'home#index'

  match 'home/:action', :controller => 'home'
end
