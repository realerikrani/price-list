APP_NAME := price-list
BUILD_DIR=build
GO_DOCKER_IMAGE := golang:1.16beta1

.PHONY: binary
binary:
	docker run --rm \
	-v $(PWD):/app \
	-w /app $(GO_DOCKER_IMAGE) \
	make -j 3 binary_windows binary_linux binary_macos

.PHONY: build_dir
build_dir:
	@mkdir -p $(BUILD_DIR)

.PHONY: binary_windows
binary_windows: build_dir
	GOOS=windows GOARCH=amd64 go build -o $(BUILD_DIR)/$(APP_NAME)-windows.exe

.PHONY: binary_linux
binary_linux: build_dir
	GOOS=linux GOARCH=amd64 go build -o $(BUILD_DIR)/$(APP_NAME)-linux

.PHONY: binary_macos
binary_macos: build_dir
	GOOS=darwin GOARCH=amd64 go build -o $(BUILD_DIR)/$(APP_NAME)-macos
