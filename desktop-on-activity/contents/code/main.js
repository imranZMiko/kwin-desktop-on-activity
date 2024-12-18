function logActivity(id) {
    print(id);
}

workspace.currentActivityChanged.connect(logActivity)