

provider "google" {
  project = var.project_id
}

resource "google_project_service" "run" {
  service = "run.googleapis.com"
}

resource "google_cloud_run_service" "movies-telegram-bot" {
  name     = "movies-telegram-bot"
  location = "us-central1"

  template {
    spec {
      containers {
        image = "gcr.io/cloudrun/hello"
        env {
            name = "MIENV"
            value = "angelote"
        }
      }
    }
  }

  traffic {
    percent         = 100
    latest_revision = true
  }

  depends_on = [google_project_service.run]
}

resource "google_cloud_run_service_iam_member" "allUsers" {
  service  = google_cloud_run_service.movies-telegram-bot.name
  location = google_cloud_run_service.movies-telegram-bot.location
  role     = "roles/run.invoker"
  member   = "allUsers"
}

output "url" {
  value = google_cloud_run_service.movies-telegram-bot.status[0].url
}
