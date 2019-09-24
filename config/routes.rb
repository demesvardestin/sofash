Rails.application.routes.draw do
  devise_for :renters
  
  devise_for :item_owners, :controllers => { :registrations => "authentication/item_owners/registrations" }
  devise_scope :item_owner do
    get '/io/login', to: 'devise/sessions#new'
    get '/io/register', to: 'devise/registrations#new'
    get '/password/settings', to: 'authentication/item_owners/registrations#edit'
    get '/retrieve/password', to: 'devise/passwords#new'
  end
  authenticated :item_owner do
    root 'item_owners/item_owners#dashboard', as: :authenticated_user_root
  end
  
  scope module: 'item_owners' do
    get '/complete-profile', to: 'item_owners#complete_profile', as: 'complete_item_owner_profile'
    get '/io/dashboard', to: 'item_owners#dashboard', as: 'io_dashboard'
    get '/initialize-prf', to: 'item_owners#initialize_prf', as: 'initialize_prf'
    get '/request-pickup', to: 'item_owners#request_pickup'
    post '/submit-pr', to: 'pickup_requests#submit_pr'
    get '/pr-confirmation', to: 'pickup_requests#pr_confirmation'
    
    resources :item_owners
    resources :pickup_requests, only: [:create, :show, :destroy]
    resources :pickup_request_items, only: :create
  end
  
  get '/console', to: 'pages#console'
  root "pages#home"
end
