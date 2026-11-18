plugins {
    id("java")
}

group = "klossverden"
version = "1.0"

repositories {
    mavenCentral()
}

java {
    toolchain {
        languageVersion = JavaLanguageVersion.of(25)
    }
}

tasks.jar {
    manifest {
        attributes["Main-Class"] = "klossverden.Main"
    }
}
