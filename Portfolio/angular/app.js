var app = angular.module("portfolioSite", []);

app.controller("appController", ($scope) => {

    $scope.fullName = "Swati Tiwari";

    $scope.aboutMe = [
        "Full Stack Web Developer",
        "B.Tech Computer Science, DIT University, dehradun",
        "Pre-final year Student",
        "Basketball Player"
    ];

    $scope.thumbnails = [
        "Yet to come up.",
        "Meanwhile you can explore some Good picture collection I have.",
        "You can also check out my logo:",
        "logo1.png",
        "mypic2.jpeg",
        "mypic3.jpeg"
    ];

    $scope.email = "swatiwari2003@gmail.com";
});