# Required
sonar.projectKey=your_project_unique_key  # e.g., "myapp-backend"
sonar.projectName=Your Project Name
sonar.host.url=http://172.31.34.232:9000/
sonar.login=squ_e466595a4745ca2a80c1ff0741ae29f6946bc5d1

# Source files
sonar.sources=src
sonar.tests=test
sonar.language=js
sonar.sourceEncoding=UTF-8

# Test coverage (if using Jest/Mocha)
sonar.javascript.lcov.reportPaths=coverage/lcov.info

# Exclusions
sonar.exclusions=**/node_modules/**,**/dist/**,**/*.spec.js
