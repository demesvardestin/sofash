Rails.application.routes.draw do
  get 'pages/home'

  devise_for :renters
  devise_for :item_owners
  
  root "pages#home"
end
