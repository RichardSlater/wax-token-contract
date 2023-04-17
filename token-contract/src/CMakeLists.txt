cmake_minimum_required(VERSION 3.10)
project(token)

find_package(cdt)

add_contract( token token token.cpp )
target_include_directories( token PUBLIC ${CMAKE_SOURCE_DIR}/../include )
target_ricardian_directory( token ${CMAKE_SOURCE_DIR}/../ricardian )
