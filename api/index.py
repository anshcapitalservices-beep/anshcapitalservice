import sys
import os
from pathlib import Path

# Add backend directory to sys.path so all imports inside server.py work
backend_path = Path(__file__).parent.parent / "backend"
sys.path.insert(0, str(backend_path))

from server import app
