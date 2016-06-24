defmodule PhoenixReact.Repo.Migrations.AddRepoTable do
  use Ecto.Migration

  def change do
    create table(:repos) do
      add :author, :string, null: false, size: 120
      add :name, :string, null: false, size: 120
    end

    create index(:repos, [:author, :name], unique: true)

    create table(:files) do
      add :repo_id, references(:repos, on_delete: :delete_all), null: false
      add :name, :string, null: false, size: 60
      add :path, :string, null: false, size: 255
      add :type, :string, null: false, size: 3
      add :size, :integer, null: false
    end

    create index(:files, [:repo_id, :path, :name], unique: true)
  end
end
