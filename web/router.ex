defmodule PhoenixReact.Router do
  use PhoenixReact.Web, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/", PhoenixReact do
    pipe_through :browser # Use the default browser stack

    get "/", PageController, :index
    get "/app/*path", PageController, :app
  end

  # Other scopes may use custom stacks.
  scope "/api", PhoenixReact do
    pipe_through :api

    get "/repos", RepoController, :index
    post "/repos/create", RepoController, :create
  end
end
