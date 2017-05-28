Rails.application.routes.draw do
 
  root "projects#index"
  
  resources :tasks do
    resources :comments, only: [:create]
  end
   resources :projects
   
    # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
