defmodule PhoenixReact.RepoController do
  use PhoenixReact.Web, :controller

  def index(conn, _) do
    render conn, repos: [
      %{author: "foo", repo: "stuff"},
      %{author: "foo", repo: "things"},
      %{author: "bob", repo: "claw"},
      %{author: "chancy", repo: "clew"}
    ]
  end
end
