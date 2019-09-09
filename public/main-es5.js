(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nb-layout>\n  <nb-layout-header fixed>\n    <app-navbar></app-navbar>\n  </nb-layout-header>\n\n  <nb-layout-column>\n    <div>\n      <!-- </div style=\"width:1200px; margin:0 auto;\"> -->\n      <router-outlet></router-outlet>\n    </div>\n  </nb-layout-column>\n\n  <nb-layout-footer fixed>\n    <section id=\"contact\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-lg-8 mx-auto text-center\">\n            <h2 class=\"section-heading\">Let's Get In Touch!</h2>\n            <hr class=\"my-4\" />\n            <p class=\"mb-5\">\n              About Author\n            </p>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-lg-4 ml-auto text-center\">\n            <i class=\"fas fa-phone fa-3x mb-3 sr-contact-1\"></i>\n            <p>519-722-7098</p>\n          </div>\n          <div class=\"col-lg-4 ml-auto text-center\">\n            <a href=\"https://github.com/YIREN1\">\n              <i class=\"fab fa-github fa-3x mb-3 sr-contact-1\"></i\n            ></a>\n          </div>\n          <div class=\"col-lg-4 mr-auto text-center\">\n            <i class=\"fas fa-envelope fa-3x mb-3 sr-contact-2\"></i>\n            <p>\n              <a href=\"y78ren@uwaterloo.ca\">y78ren@uwaterloo.ca</a>\n            </p>\n          </div>\n        </div>\n      </div>\n    </section>\n  </nb-layout-footer>\n</nb-layout>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/chat/chat-channel-modal/chat-channel-modal.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/chat/chat-channel-modal/chat-channel-modal.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n  <h4 class=\"modal-title\">Channels</h4>\n</div>\n\n<div class=\"modal-body\">\n  <button nbButton (click)=\"createChannel()\">Create Channle</button>\n  <input nbInput type=\"text\" />\n  <nb-list>\n    <nb-list-item *ngFor=\"let channel of channels\">\n      <button\n        nbButton\n        fullWidth\n        status=\"success\"\n        (click)=\"openChannel(channel.id)\"\n      >\n        {{ channel.name }}\n      </button>\n    </nb-list-item>\n  </nb-list>\n</div>\n\n<div class=\"modal-footer\"></div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/chat/chat-dm-modal/chat-dm-modal.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/chat/chat-dm-modal/chat-dm-modal.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n  <div><h4 class=\"modal-title\">Direct Messages</h4></div>\n</div>\n\n<div class=\"modal-body\">\n  <input nbInput type=\"text\" />\n  <nb-list>\n    <nb-list-item *ngFor=\"let user of users\">\n      <button\n        nbButton\n        fullWidth\n        status=\"success\"\n        (click)=\"sendDirectMessage(user.id, user.name)\"\n      >\n        {{ user.name }}\n      </button>\n    </nb-list-item>\n  </nb-list>\n</div>\n\n<div class=\"modal-footer\"></div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/chat/chat.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/chat/chat.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nb-layout>\n  <nb-layout-header subheader>\n    <button nbButton status=\"success\" size=\"tiny\" (click)=\"toggle()\">\n      Toggle\n    </button>\n    <p style=\"text-align:center\">{{ getChannlelName(selectedChannel.name) }}</p>\n    <button\n      nbButton\n      status=\"danger\"\n      size=\"tiny\"\n      *ngIf=\"!isGeneral()\"\n      (click)=\"leaveChannelFake()\"\n    >\n      leave channel\n    </button>\n    <p *ngIf=\"isTyping\">someone is typing</p>\n  </nb-layout-header>\n\n  <nb-sidebar tag=\"left\">\n    <app-chatsidebar></app-chatsidebar>\n  </nb-sidebar>\n\n  <nb-layout-column>\n    <nb-chat title=\"start chatting\" size=\"giant\" scrollBottom=\"true\">\n      <nb-chat-message\n        *ngFor=\"let msg of messages\"\n        [type]=\"msg.type\"\n        [message]=\"msg.text\"\n        [reply]=\"msg.reply\"\n        [sender]=\"msg.user.name\"\n        [date]=\"msg.date\"\n        [files]=\"msg.files\"\n        [quote]=\"msg.quote\"\n        [avatar]=\"msg.user.avatar\"\n        [nbPopover]=\"messageOption\"\n        nbPopoverTrigger=\"hover\"\n        nbPopoverPlacement=\"right\"\n        [nbPopoverContext]=\"msg\"\n      >\n      </nb-chat-message>\n      <nb-chat-form\n        (keypress)=\"keyPress($event)\"\n        (keyup)=\"keyUp($event)\"\n        (send)=\"sendMessage($event)\"\n        [dropFiles]=\"true\"\n        #chatForm\n      >\n      </nb-chat-form>\n    </nb-chat>\n  </nb-layout-column>\n</nb-layout>\n\n<ng-template #messageOption let-msg>\n  <nb-icon icon=\"heart-outline\"></nb-icon>\n  <nb-icon icon=\"edit-outline\" (click)=\"openEditMessageWindow(msg)\"></nb-icon>\n  <nb-icon\n    icon=\"trash-2-outline\"\n    (click)=\"openDeleteMessageWindow(msg)\"\n  ></nb-icon>\n</ng-template>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/chat/chatsidebar/chatsidebar.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/chat/chatsidebar/chatsidebar.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button nbButton (click)=\"openWindow('channels')\">Channels</button>\n\n<button nbButton (click)=\"openWindow('directMessages')\">Direct Messages</button>\n\n<nb-menu tag=\"menu\" [items]=\"items\"> </nb-menu>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/chatbot/chatbot.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/chatbot/chatbot.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>chatbot works!</p>\n<nb-chat title=\"Conversation with a Bot\">\n  <nb-chat-message\n    *ngFor=\"let msg of messages\"\n    type=\"text\"\n    [message]=\"msg.text\"\n    [reply]=\"msg.reply\"\n    [sender]=\"msg.sender\"\n    [date]=\"msg.date\"\n    [avatar]=\"msg.avatar\"\n  >\n  </nb-chat-message>\n\n  <nb-chat-message\n    *ngIf=\"loading\"\n    [nbSpinner]=\"loading\"\n    nbSpinnerStatus=\"info\"\n    type=\"text\"\n    avatar=\"/assets/bot.jpeg\"\n    message=\"...\"\n  >\n  </nb-chat-message>\n\n  <nb-chat-form (send)=\"handleUserMessage($event)\"></nb-chat-form>\n</nb-chat>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/dashboard/dashboard.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/dashboard/dashboard.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>\n  <!-- here we echo the title from the component -->\n  {{ dashBoardTitle }}\n</h1>\n<nb-tabset>\n  <nb-tab tabTitle=\"upload\" badgeText=\"99+\" badgeStatus=\"danger\">\n    <app-upload></app-upload>\n  </nb-tab>\n  <nb-tab\n    tabTitle=\"chatbot\"\n    badgeText=\"12\"\n    badgePosition=\"bottom right\"\n    badgeStatus=\"warning\"\n  >\n    <app-chatbot></app-chatbot>\n  </nb-tab>\n  <nb-tab\n    tabTitle=\"chat\"\n    badgeText=\"new\"\n    badgePosition=\"top right\"\n    badgeStatus=\"success\"\n  >\n  <a [routerLink]=\"[ '/channel', '5d67c349f6f8f916672031f4' ]\">chat</a>\n    <!-- <app-chat></app-chat> -->\n  </nb-tab>\n  <nb-tab\n    tabTitle=\"video chat\"\n    badgeText=\"new\"\n    badgePosition=\"top right\"\n    badgeStatus=\"success\"\n  >\n    <app-videochat></app-videochat>\n  </nb-tab>\n</nb-tabset>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/forgot-password/forgot-password.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/forgot-password/forgot-password.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-wrap\">\n    <div class=\"login-html login form\">\n          <div class=\"group\">\n            <label for=\"user\" class=\"label\">Please Enter Your Email Address:</label>\n            <input\n              [(ngModel)]=\"email\"\n              id=\"signin-email\"\n              type=\"text\"\n              class=\"input\"\n            />\n          </div>\n          <div class=\"group\">\n            <input\n              (click)=\"sendResetPasswordEmail()\"\n              type=\"submit\"\n              class=\"button\"\n              value=\"Send Email\"\n            />\n            \n          </div>\n          <div class=\"hr\"></div> \n          <p>You will receive an email to reset your password</p>\n        </div>\n  </div>\n  "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/home/home.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/home/home.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"utf-8\" />\n    <meta\n      name=\"viewport\"\n      content=\"width=device-width, initial-scale=1, shrink-to-fit=no\"\n    />\n    <meta name=\"description\" content=\"\" />\n    <meta name=\"author\" content=\"\" />\n\n    <title>Creative - Start Bootstrap Theme</title>\n\n    <!-- Bootstrap core CSS -->\n  </head>\n\n  <body id=\"page-top\">\n    <header class=\"masthead text-center text-white d-flex\">\n      <div class=\"container my-auto\">\n        <div class=\"row m-0\">\n          <div class=\"col-lg-10 mx-auto\">\n            <h1 class=\"text-uppercase\">\n              <strong>A chat app like slack</strong>\n            </h1>\n            <hr />\n          </div>\n          <div class=\"col-lg-8 mx-auto\">\n            <p class=\"text-faded mb-5\">\n              Start Bootstrap can help you build better websites using the\n              Bootstrap CSS framework! Just download your template and start\n              going, no strings attached!\n            </p>\n            <a class=\"btn btn-primary btn-xl js-scroll-trigger\" href=\"#about\"\n              >Find Out More</a\n            >\n          </div>\n        </div>\n      </div>\n    </header>\n\n    <section class=\"bg-primary\" id=\"about\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-lg-8 mx-auto text-center\">\n            <h2 class=\"section-heading text-white\">We've got what you need!</h2>\n            <hr class=\"light my-4\" />\n            <p class=\"text-faded mb-4\">\n              A chat app\n            </p>\n            <a class=\"btn btn-light btn-xl js-scroll-trigger\" href=\"#services\"\n              >Get Started!</a\n            >\n          </div>\n        </div>\n      </div>\n    </section>\n\n    <section id=\"services\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-lg-12 text-center\">\n            <h2 class=\"section-heading\">At Your Service</h2>\n            <hr class=\"my-4\" />\n          </div>\n        </div>\n      </div>\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-lg-3 col-md-6 text-center\">\n            <div class=\"service-box mt-5 mx-auto\">\n              <i class=\"fas fa-4x fa-gem text-primary mb-3 sr-icon-1\"></i>\n              <h3 class=\"mb-3\">Sturdy Templates</h3>\n              <p class=\"text-muted mb-0\">\n                Our templates are updated regularly so they don't break.\n              </p>\n            </div>\n          </div>\n          <div class=\"col-lg-3 col-md-6 text-center\">\n            <div class=\"service-box mt-5 mx-auto\">\n              <i\n                class=\"fas fa-4x fa-paper-plane text-primary mb-3 sr-icon-2\"\n              ></i>\n              <h3 class=\"mb-3\">Ready to Ship</h3>\n              <p class=\"text-muted mb-0\">\n                You can use this theme as is, or you can make changes!\n              </p>\n            </div>\n          </div>\n          <div class=\"col-lg-3 col-md-6 text-center\">\n            <div class=\"service-box mt-5 mx-auto\">\n              <i class=\"fas fa-4x fa-code text-primary mb-3 sr-icon-3\"></i>\n              <h3 class=\"mb-3\">Up to Date</h3>\n              <p class=\"text-muted mb-0\">\n                We update dependencies to keep things fresh.\n              </p>\n            </div>\n          </div>\n          <div class=\"col-lg-3 col-md-6 text-center\">\n            <div class=\"service-box mt-5 mx-auto\">\n              <i class=\"fas fa-4x fa-heart text-primary mb-3 sr-icon-4\"></i>\n              <h3 class=\"mb-3\">Made with Love</h3>\n              <p class=\"text-muted mb-0\">\n                You have to make your websites with love these days!\n              </p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>\n\n    <section class=\"p-0\" id=\"portfolio\">\n      <div class=\"container-fluid p-0\">\n        <div class=\"row no-gutters popup-gallery\">\n          <div class=\"col-lg-4 col-sm-6\">\n            <a class=\"portfolio-box\" href=\"assets/img/portfolio/fullsize/1.jpg\">\n              <img\n                class=\"img-fluid\"\n                src=\"assets/img/portfolio/thumbnails/1.jpg\"\n                alt=\"\"\n                loading=\"lazy\"\n                width=\"427px\"\n                height=\"232px\"\n              />\n              <div class=\"portfolio-box-caption\">\n                <div class=\"portfolio-box-caption-content\">\n                  <div class=\"project-category text-faded\">\n                    Category\n                  </div>\n                  <div class=\"project-name\">\n                    Project Name\n                  </div>\n                </div>\n              </div>\n            </a>\n          </div>\n          <div class=\"col-lg-4 col-sm-6\">\n            <a class=\"portfolio-box\" href=\"assets/img/portfolio/fullsize/2.jpg\">\n              <img\n                class=\"img-fluid\"\n                src=\"assets/img/portfolio/thumbnails/2.jpg\"\n                alt=\"\"\n                loading=\"lazy\"\n                width=\"427px\"\n                height=\"232px\"\n              />\n              <div class=\"portfolio-box-caption\">\n                <div class=\"portfolio-box-caption-content\">\n                  <div class=\"project-category text-faded\">\n                    Category\n                  </div>\n                  <div class=\"project-name\">\n                    Project Name\n                  </div>\n                </div>\n              </div>\n            </a>\n          </div>\n          <div class=\"col-lg-4 col-sm-6\">\n            <a class=\"portfolio-box\" href=\"assets/img/portfolio/fullsize/3.jpg\">\n              <img\n                class=\"img-fluid\"\n                src=\"assets/img/portfolio/thumbnails/3.jpg\"\n                alt=\"\"\n                loading=\"lazy\"\n                width=\"427px\"\n                height=\"232px\"\n              />\n              <div class=\"portfolio-box-caption\">\n                <div class=\"portfolio-box-caption-content\">\n                  <div class=\"project-category text-faded\">\n                    Category\n                  </div>\n                  <div class=\"project-name\">\n                    Project Name\n                  </div>\n                </div>\n              </div>\n            </a>\n          </div>\n          <div class=\"col-lg-4 col-sm-6\">\n            <a\n              class=\"portfolio-box\"\n              href=\"../../../assets/img/portfolio/fullsize/4.jpg\"\n            >\n              <img\n                class=\"img-fluid\"\n                src=\"../../../assets/img/portfolio/thumbnails/4.jpg\"\n                alt=\"\"\n                loading=\"lazy\"\n                width=\"427px\"\n                height=\"232px\"\n              />\n              <div class=\"portfolio-box-caption\">\n                <div class=\"portfolio-box-caption-content\">\n                  <div class=\"project-category text-faded\">\n                    Category\n                  </div>\n                  <div class=\"project-name\">\n                    Project Name\n                  </div>\n                </div>\n              </div>\n            </a>\n          </div>\n          <div class=\"col-lg-4 col-sm-6\">\n            <a class=\"portfolio-box\" href=\"assets/img/portfolio/fullsize/5.jpg\">\n              <img\n                class=\"img-fluid\"\n                src=\"assets/img/portfolio/thumbnails/5.jpg\"\n                alt=\"\"\n                loading=\"lazy\"\n                width=\"427px\"\n                height=\"232px\"\n              />\n              <div class=\"portfolio-box-caption\">\n                <div class=\"portfolio-box-caption-content\">\n                  <div class=\"project-category text-faded\">\n                    Category\n                  </div>\n                  <div class=\"project-name\">\n                    Project Name\n                  </div>\n                </div>\n              </div>\n            </a>\n          </div>\n          <div class=\"col-lg-4 col-sm-6\">\n            <a class=\"portfolio-box\" href=\"assets/img/portfolio/fullsize/6.jpg\">\n              <img\n                class=\"img-fluid\"\n                src=\"assets/img/portfolio/thumbnails/6.jpg\"\n                alt=\"\"\n                loading=\"lazy\"\n                width=\"427px\"\n                height=\"232px\"\n              />\n              <div class=\"portfolio-box-caption\">\n                <div class=\"portfolio-box-caption-content\">\n                  <div class=\"project-category text-faded\">\n                    Category\n                  </div>\n                  <div class=\"project-name\">\n                    Project Name\n                  </div>\n                </div>\n              </div>\n            </a>\n          </div>\n        </div>\n      </div>\n    </section>\n\n    <section class=\"bg-dark text-white\">\n      <div class=\"container text-center\">\n        <h2 class=\"mb-4\">Working on make a desktop version of it!</h2>\n        <a\n          class=\"btn btn-light btn-xl sr-button\"\n          href=\"http://startbootstrap.com/template-overviews/creative/\"\n          >Download Now!</a\n        >\n      </div>\n    </section>\n\n    <!-- Bootstrap core JavaScript -->\n    <script src=\"vendor/jquery/jquery.min.js\"></script>\n    <script src=\"vendor/bootstrap/js/bootstrap.bundle.min.js\"></script>\n\n    <!-- Plugin JavaScript -->\n    <script src=\"vendor/jquery-easing/jquery.easing.min.js\"></script>\n    <script src=\"vendor/scrollreveal/scrollreveal.min.js\"></script>\n    <script src=\"vendor/magnific-popup/jquery.magnific-popup.min.js\"></script>\n\n    <!-- Custom scripts for this template -->\n    <script src=\"js/creative.min.js\"></script>\n  </body>\n</html>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/navbar/navbar.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/navbar/navbar.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark bg-dark fixed-top\">\n  <a class=\"navbar-brand\" [routerLink]=\"['/']\">Home</a><br />\n  <a class=\"navbar-brand\" [routerLink]=\"['/dashboard']\">Dashboard</a>\n  <button\n    class=\"navbar-toggler\"\n    type=\"button\"\n    data-toggle=\"collapse\"\n    data-target=\"#navbarsExampleDefault\"\n    aria-controls=\"navbarsExampleDefault\"\n    aria-expanded=\"false\"\n    aria-label=\"Toggle navigation\"\n  >\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarsExampleDefault\">\n    <ul class=\"navbar-nav mr-auto\">\n      <!-- <li class=\"nav-item active\">\n          <a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\">Link</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link disabled\" href=\"#\">Disabled</a>\n        </li> -->\n      <!-- <li class=\"nav-item dropdown\">\n          <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"dropdown01\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">Dropdown</a>\n          <div class=\"dropdown-menu\" aria-labelledby=\"dropdown01\">\n            <a class=\"dropdown-item\" href=\"#\">Action</a>\n            <a class=\"dropdown-item\" href=\"#\">Another action</a>\n            <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n          </div>\n        </li> -->\n    </ul>\n    <nb-search type=\"rotate-layout\"></nb-search>\n    <ul class=\"navbar-nav mr-auto ml-auto\">\n      <li class=\"nav-item\">\n        <a\n          *ngIf=\"!authService.loggedIn()\"\n          class=\"nav-link\"\n          href=\"#\"\n          (click)=\"openSignUpModal()\"\n        >\n          Login/Sign up\n          <span class=\"sr-only\">(current)</span>\n        </a>\n      </li>\n      <!-- <li class=\"nav-item\">\n        <a\n          *ngIf=\"authService.loggedIn()\"\n          class=\"nav-link\"\n          href=\"#\"\n          (click)=\"onLogoutClick()\"\n        >\n          Logout\n        </a>\n      </li> -->\n\n      <li\n        class=\"nav-item\"\n        style=\"float: right;\"\n        ngbDropdown\n        *ngIf=\"authService.loggedIn()\"\n      >\n        <nb-user\n          ngbDropdownToggle\n          style=\"cursor: pointer\"\n          [name]=\"user?.name\"\n          [picture]=\"user?.picture\"\n        >\n        </nb-user>\n        <div\n          ngbDropdownMenu\n          aria-labelledby=\"navbarDropdown1\"\n          class=\"dropdown-menu\"\n        >\n          <button ngbDropdownItem>Profile</button>\n          <button ngbDropdownItem>Settings</button>\n          <button ngbDropdownItem (click)=\"onLogoutClick()\">logout</button>\n        </div>\n      </li>\n    </ul>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/profile/profile.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/profile/profile.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link href=\"//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css\" rel=\"stylesheet\" id=\"bootstrap-css\">\n<script src=\"//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js\"></script>\n<script src=\"//code.jquery.com/jquery-1.11.1.min.js\"></script>\n<!------ Include the above in your HEAD tag ---------->\n\n<div class=\"col-lg-6 col-sm-6\">\n    <div class=\"card hovercard\">\n        <div class=\"card-background\">\n            <img class=\"card-bkimg\" alt=\"\" src=\"http://lorempixel.com/100/100/people/9/\">\n            <!-- http://lorempixel.com/850/280/people/9/ -->\n        </div>\n        <div class=\"useravatar\">\n            <img alt=\"\" src=\"http://lorempixel.com/100/100/people/9/\">\n        </div>\n        <div class=\"card-info\"> <span class=\"card-title\">Pamela Anderson</span>\n\n        </div>\n    </div>\n    <div class=\"btn-pref btn-group btn-group-justified btn-group-lg\" role=\"group\" aria-label=\"...\">\n        <div class=\"btn-group\" role=\"group\">\n            <button type=\"button\" id=\"stars\" class=\"btn btn-primary\" href=\"#tab1\" data-toggle=\"tab\"><span class=\"glyphicon glyphicon-star\" aria-hidden=\"true\"></span>\n                <div class=\"hidden-xs\">Stars</div>\n            </button>\n        </div>\n        <div class=\"btn-group\" role=\"group\">\n            <button type=\"button\" id=\"favorites\" class=\"btn btn-default\" href=\"#tab2\" data-toggle=\"tab\"><span class=\"glyphicon glyphicon-heart\" aria-hidden=\"true\"></span>\n                <div class=\"hidden-xs\">Favorites</div>\n            </button>\n        </div>\n        <div class=\"btn-group\" role=\"group\">\n            <button type=\"button\" id=\"following\" class=\"btn btn-default\" href=\"#tab3\" data-toggle=\"tab\"><span class=\"glyphicon glyphicon-user\" aria-hidden=\"true\"></span>\n                <div class=\"hidden-xs\">Following</div>\n            </button>\n        </div>\n    </div>\n\n        <div class=\"well\">\n      <div class=\"tab-content\">\n        <div class=\"tab-pane fade in active\" id=\"tab1\">\n          <h3>This is tab 1</h3>\n        </div>\n        <div class=\"tab-pane fade in\" id=\"tab2\">\n          <h3>This is tab 2</h3>\n        </div>\n        <div class=\"tab-pane fade in\" id=\"tab3\">\n          <h3>This is tab 3</h3>\n        </div>\n      </div>\n    </div>\n    \n    </div>\n            \n    "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/signin-signup/signin-signup.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/signin-signup/signin-signup.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-wrap\">\n  <div class=\"login-html\">\n    <input id=\"tab-1\" type=\"radio\" name=\"tab\" class=\"sign-in\" /><label\n      for=\"tab-1\"\n      class=\"tab\"\n      >Sign In</label\n    >\n    <input id=\"tab-2\" type=\"radio\" name=\"tab\" class=\"sign-up\" checked /><label\n      for=\"tab-2\"\n      class=\"tab\"\n      >Sign Up</label\n    >\n    <div class=\"login-form\">\n      <h1>{{ message | async }}</h1>\n      <div class=\"sign-in-htm\">\n        <div class=\"group\">\n          <label for=\"user\" class=\"label\">Email</label>\n          <input\n            [(ngModel)]=\"email\"\n            id=\"signin-email\"\n            type=\"text\"\n            class=\"input\"\n          />\n        </div>\n        <div class=\"group\">\n          <label for=\"pass\" class=\"label\">Password</label>\n          <input\n            [(ngModel)]=\"password\"\n            id=\"signin-password\"\n            type=\"password\"\n            class=\"input\"\n            data-type=\"password\"\n          />\n        </div>\n        <div class=\"group\">\n          <div id=\"example3\"></div>\n        </div>\n        <div class=\"group\">\n          <span\n            ><div id=\"gSignIn\"></div>\n            <a href=\"#\" (click)=\"signOutGoogle()\" id=\"signout\"></a>\n          </span>\n        </div>\n        <div class=\"group\">\n          <input\n            (click)=\"onSignIn()\"\n            type=\"submit\"\n            class=\"button\"\n            value=\"Sign In\"\n          />\n        </div>\n\n        <div class=\"hr\"></div>\n        <div class=\"foot-lnk\">\n          <a (click)=\"openForgotModal()\">Forgot Password?</a> <br />\n          <a (click)=\"open2faModal()\">Sign in with phone</a>\n        </div>\n      </div>\n      <div class=\"sign-up-htm\">\n        <div class=\"group\">\n          <label for=\"user\" class=\"label\">Full Name</label>\n          <input\n            [(ngModel)]=\"name\"\n            id=\"signup-name\"\n            type=\"text\"\n            class=\"input\"\n          />\n        </div>\n        <div class=\"group\">\n          <label for=\"pass\" class=\"label\">Email Address</label>\n          <input\n            [(ngModel)]=\"email\"\n            id=\"signup-email\"\n            type=\"text\"\n            class=\"input\"\n          />\n        </div>\n        <div class=\"group\">\n          <label for=\"user\" class=\"label\">Profile Name</label>\n          <input\n            [(ngModel)]=\"profileName\"\n            id=\"signup-profilename\"\n            type=\"text\"\n            class=\"input\"\n          />\n        </div>\n\n        <div class=\"group\">\n          <label for=\"pass\" class=\"label\">Password</label>\n          <input\n            [(ngModel)]=\"password\"\n            id=\"signup-password\"\n            type=\"password\"\n            class=\"input\"\n            data-type=\"password\"\n          />\n        </div>\n        <div class=\"group\">\n          <label for=\"pass\" class=\"label\">Confirm Password</label>\n          <input\n            [(ngModel)]=\"confirmpassword\"\n            id=\"signup-confirmpassword\"\n            type=\"password\"\n            class=\"input\"\n            data-type=\"password\"\n          />\n        </div>\n        <div class=\"group\">\n          <input\n            (click)=\"onSignUp()\"\n            type=\"submit\"\n            class=\"button\"\n            value=\"Sign Up\"\n          />\n          <!-- <button type=\"button\" class=\"btn btn-warning shiny\" data-dismiss=\"modal\" aria-hidden=\"true\">Cancel</button> -->\n        </div>\n        <div class=\"hr\"></div>\n        <!-- <div class=\"foot-lnk\">\n          <label for=\"tab-1\">Already a Member?</label>\n        </div> -->\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/upload/upload.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/upload/upload.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>{{ dashBoardTitle }}</p>\n<!-- File input for the file-upload plugin, with special ng2-file-upload directive called ng2FileSelect -->\n<input\n  nbInput\n  type=\"file\"\n  name=\"photo\"\n  ng2FileSelect\n  [uploader]=\"uploader\"\n  multiple\n/>\n<!-- button to trigger the file upload when submitted -->\n<button\n  nbButton\n  type=\"button\"\n  class=\"btn btn-success btn-s\"\n  (click)=\"uploader.uploadAll()\"\n  [disabled]=\"!uploader.getNotUploadedItems().length\"\n>\n  Upload with ng-2 file uploader\n</button>\n<br />\n<!-- File input for upload without using the plugin. -->\n<input nbInput id=\"photo\" type=\"file\" />\n<!-- button to trigger the file upload when submitted -->\n<button\n  nbButton\n  type=\"button\"\n  class=\"btn btn-success btn-s\"\n  (click)=\"upload()\"\n  disabled\n>\n  Upload with method 2 (coming soon)\n</button>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/videochat/videochat.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/videochat/videochat.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>videochat works!</p>\n\n<p>I am {{ myPeerId }}</p>\n<input\n  type=\"text\"\n  nbInput\n  fullWidth\n  fieldSize=\"large\"\n  shape=\"round\"\n  placeholder=\"enter your peer's id\"\n  [(ngModel)]=\"anotherid\"\n/>\n<button nbButton (click)=\"connect()\">Connect</button>\n<button nbButton (click)=\"videoconnect()\">VideoChat</button>\n<br />\n<video #myvideo></video>\n<p>other:</p>\n<video #othervideo></video>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/page404/page404.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/page404/page404.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n  <title>404</title>\n</head>\n<body>\n  <div class=\"container\">\n    <div class=\"row\">\n        <div class=\"xs-12 md-6 mx-auto\">\n            <div id=\"countUp\">\n                <div class=\"number\" data-count=\"404\">404</div>\n                <div class=\"text\">Page not found</div>\n                <div class=\"text\">What the f**k are you doing dude?.</div>\n                <div class=\"text\">Type the f**king correct route.</div>\n            </div>\n        </div>\n    </div>\n  </div> \n</body>\n</html>\n           \n          "

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'angualr-src';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");
/* harmony import */ var _components_signin_signup_signin_signup_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/signin-signup/signin-signup.component */ "./src/app/components/signin-signup/signin-signup.component.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @nebular/eva-icons */ "./node_modules/@nebular/eva-icons/fesm5/index.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/fesm5/index.js");
/* harmony import */ var _components_chat_chat_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/chat/chat.component */ "./src/app/components/chat/chat.component.ts");
/* harmony import */ var _components_chat_chat_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/chat/chat.module */ "./src/app/components/chat/chat.module.ts");
/* harmony import */ var _components_chatbot_chatbot_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/chatbot/chatbot.component */ "./src/app/components/chatbot/chatbot.component.ts");
/* harmony import */ var _components_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/forgot-password/forgot-password.component */ "./src/app/components/forgot-password/forgot-password.component.ts");
/* harmony import */ var _components_upload_upload_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/upload/upload.component */ "./src/app/components/upload/upload.component.ts");
/* harmony import */ var _components_videochat_videochat_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/videochat/videochat.component */ "./src/app/components/videochat/videochat.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _page404_page404_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./page404/page404.component */ "./src/app/page404/page404.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");





























var appRoutes = [
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"] },
    { path: 'dashboard', component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__["DashboardComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_26__["AuthGuard"]] },
    { path: 'channel/:channelId', component: _components_chat_chat_component__WEBPACK_IMPORTED_MODULE_20__["ChatComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_26__["AuthGuard"]] },
    { path: 'channel', component: _components_chat_chat_component__WEBPACK_IMPORTED_MODULE_20__["ChatComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_26__["AuthGuard"]] },
    { path: '**', component: _page404_page404_component__WEBPACK_IMPORTED_MODULE_27__["Page404Component"], pathMatch: 'full' } // All unmatched routes
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_13__["NavbarComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"],
                _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__["DashboardComponent"],
                _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_14__["ProfileComponent"],
                _components_signin_signup_signin_signup_component__WEBPACK_IMPORTED_MODULE_15__["SigninSignupComponent"],
                _page404_page404_component__WEBPACK_IMPORTED_MODULE_27__["Page404Component"],
                _components_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_23__["ForgotPasswordComponent"],
                _components_chatbot_chatbot_component__WEBPACK_IMPORTED_MODULE_22__["ChatbotComponent"],
                _components_upload_upload_component__WEBPACK_IMPORTED_MODULE_24__["UploadComponent"],
                _components_videochat_videochat_component__WEBPACK_IMPORTED_MODULE_25__["VideochatComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(appRoutes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_28__["SharedModule"],
                _components_chat_chat_module__WEBPACK_IMPORTED_MODULE_21__["ChatModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_19__["NbLayoutModule"],
                _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_18__["NbEvaIconsModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_19__["NbChatModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_19__["NbSpinnerModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_19__["NbThemeModule"].forRoot({ name: 'dark' }),
                _nebular_theme__WEBPACK_IMPORTED_MODULE_19__["NbUserModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_19__["NbButtonModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_19__["NbTabsetModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_19__["NbSearchModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_19__["NbInputModule"],
                ng2_file_upload__WEBPACK_IMPORTED_MODULE_7__["FileUploadModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_19__["NbSidebarModule"].forRoot(),
                _nebular_theme__WEBPACK_IMPORTED_MODULE_19__["NbWindowModule"].forRoot(),
                _nebular_theme__WEBPACK_IMPORTED_MODULE_19__["NbDialogModule"].forRoot(),
                _nebular_theme__WEBPACK_IMPORTED_MODULE_19__["NbMenuModule"].forRoot(),
            ],
            providers: [
                _services_validate_service__WEBPACK_IMPORTED_MODULE_17__["ValidateService"],
                _services_auth_service__WEBPACK_IMPORTED_MODULE_16__["AuthService"],
                _guards_auth_guard__WEBPACK_IMPORTED_MODULE_26__["AuthGuard"],
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]],
            entryComponents: [_components_signin_signup_signin_signup_component__WEBPACK_IMPORTED_MODULE_15__["SigninSignupComponent"], _components_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_23__["ForgotPasswordComponent"]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/chat/chat-channel-modal/chat-channel-modal.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/components/chat/chat-channel-modal/chat-channel-modal.component.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h4 {\n  text-align: center;\n  color: steelblue;\n}\ninput[type='text'] {\n  display: block;\n  margin: 0 auto;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jaGF0L2NoYXQtY2hhbm5lbC1tb2RhbC9jaGF0LWNoYW5uZWwtbW9kYWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGNBQWM7RUFDZCxjQUFjO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jaGF0L2NoYXQtY2hhbm5lbC1tb2RhbC9jaGF0LWNoYW5uZWwtbW9kYWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImg0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogc3RlZWxibHVlO1xufVxuaW5wdXRbdHlwZT0ndGV4dCddIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/components/chat/chat-channel-modal/chat-channel-modal.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/components/chat/chat-channel-modal/chat-channel-modal.component.ts ***!
  \************************************************************************************/
/*! exports provided: ChatChannelModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatChannelModalComponent", function() { return ChatChannelModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _shared_service_channel_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/service/channel.service */ "./src/app/components/chat/shared/service/channel.service.ts");
/* harmony import */ var _shared_service_socket_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/service/socket.service */ "./src/app/components/chat/shared/service/socket.service.ts");
/* harmony import */ var _shared_service_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/service/user.service */ "./src/app/components/chat/shared/service/user.service.ts");









var ChatChannelModalComponent = /** @class */ (function () {
    function ChatChannelModalComponent(userService, channelService, socketService, authService, activeModal, router) {
        this.userService = userService;
        this.channelService = channelService;
        this.socketService = socketService;
        this.authService = authService;
        this.activeModal = activeModal;
        this.router = router;
        this.secret = 'you got it!';
    }
    ChatChannelModalComponent.prototype.ngOnInit = function () {
        this.initChannels();
    };
    ChatChannelModalComponent.prototype.dosome = function () {
        console.log('dooooooo');
    };
    ChatChannelModalComponent.prototype.initChannels = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.channelService.getAllChannels().subscribe(function (data) {
                            _this.channels = data;
                        });
                        _a = this;
                        return [4 /*yield*/, this.authService.getUser()];
                    case 1:
                        _a.currentUser = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ChatChannelModalComponent.prototype.createChannel = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var channelName;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                            title: 'Please name your new channel',
                            input: 'text',
                            showCancelButton: true,
                            background: '#789',
                            inputValidator: function (value) {
                                if (!value) {
                                    return 'You need to write something!';
                                }
                            }
                        })];
                    case 1:
                        channelName = (_a.sent()).value;
                        if (!channelName) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.channelService.createChannel(channelName, [this.currentUser.id], 'channel').subscribe(function (channel) {
                                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                                    type: 'success',
                                    title: 'Your channel has been created',
                                    showConfirmButton: false,
                                    timer: 1500,
                                    background: '#789',
                                }).then(function () {
                                    _this.socketService.sendEvent(channel.id, 'join');
                                    _this.router.navigate(['channel', channel.id]);
                                    _this.activeModal.close();
                                });
                                _this.channels.push(channel);
                            })];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ChatChannelModalComponent.prototype.openChannel = function (channelId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.channelService.getChannel(channelId).subscribe(function (channel) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                            var isInChannel;
                            var _this = this;
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        isInChannel = channel.usersInChannel.find(function (userId) { return _this.currentUser.id === userId; });
                                        if (!!isInChannel) return [3 /*break*/, 2];
                                        return [4 /*yield*/, this.channelService.joinChannel(channelId).subscribe(function (channel) {
                                                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                                                    type: 'success',
                                                    title: "Your have joined " + channel.name,
                                                    showConfirmButton: false,
                                                    timer: 1500,
                                                    background: '#789',
                                                }).then(function () {
                                                    _this.socketService.sendEvent(channel.id, 'join');
                                                    _this.router.navigate(['channel', channel.id]);
                                                    _this.activeModal.close();
                                                });
                                            })];
                                    case 1:
                                        _a.sent();
                                        _a.label = 2;
                                    case 2: return [2 /*return*/];
                                }
                            });
                        }); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ChatChannelModalComponent.ctorParameters = function () { return [
        { type: _shared_service_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"] },
        { type: _shared_service_channel_service__WEBPACK_IMPORTED_MODULE_6__["ChannelService"] },
        { type: _shared_service_socket_service__WEBPACK_IMPORTED_MODULE_7__["SocketService"] },
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbActiveModal"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    ChatChannelModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chat-channel-modal',
            template: __webpack_require__(/*! raw-loader!./chat-channel-modal.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/chat/chat-channel-modal/chat-channel-modal.component.html"),
            styles: [__webpack_require__(/*! ./chat-channel-modal.component.css */ "./src/app/components/chat/chat-channel-modal/chat-channel-modal.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_service_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"],
            _shared_service_channel_service__WEBPACK_IMPORTED_MODULE_6__["ChannelService"],
            _shared_service_socket_service__WEBPACK_IMPORTED_MODULE_7__["SocketService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbActiveModal"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ChatChannelModalComponent);
    return ChatChannelModalComponent;
}());



/***/ }),

/***/ "./src/app/components/chat/chat-dm-modal/chat-dm-modal.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/components/chat/chat-dm-modal/chat-dm-modal.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h4 {\n  text-align: center;\n  color: steelblue;\n}\ninput[type=\"text\"] {\n  display: block;\n  margin : 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jaGF0L2NoYXQtZG0tbW9kYWwvY2hhdC1kbS1tb2RhbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsY0FBYztFQUNkLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NoYXQvY2hhdC1kbS1tb2RhbC9jaGF0LWRtLW1vZGFsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoNCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHN0ZWVsYmx1ZTtcbn1cbmlucHV0W3R5cGU9XCJ0ZXh0XCJdIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbiA6IDAgYXV0bztcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/chat/chat-dm-modal/chat-dm-modal.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/components/chat/chat-dm-modal/chat-dm-modal.component.ts ***!
  \**************************************************************************/
/*! exports provided: ChatDmModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatDmModalComponent", function() { return ChatDmModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _shared_service_channel_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/service/channel.service */ "./src/app/components/chat/shared/service/channel.service.ts");
/* harmony import */ var _shared_service_socket_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/service/socket.service */ "./src/app/components/chat/shared/service/socket.service.ts");
/* harmony import */ var _shared_service_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/service/user.service */ "./src/app/components/chat/shared/service/user.service.ts");








var ChatDmModalComponent = /** @class */ (function () {
    function ChatDmModalComponent(userService, channelService, socketService, authService, activeModal, router) {
        this.userService = userService;
        this.channelService = channelService;
        this.socketService = socketService;
        this.authService = authService;
        this.activeModal = activeModal;
        this.router = router;
    }
    ChatDmModalComponent.prototype.ngOnInit = function () {
        this.initUsers();
    };
    ChatDmModalComponent.prototype.initUsers = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.userService.getUsers().subscribe(function (data) {
                            _this.users = data;
                        });
                        _a = this;
                        return [4 /*yield*/, this.authService.getUser()];
                    case 1:
                        _a.currentUser = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ChatDmModalComponent.prototype.sendDirectMessage = function (toUserId, toUserName) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var incomingChannel;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.channelService.createChannel(this.currentUser.name + "," + toUserName, [this.currentUser.id, toUserId], 'directMessage').subscribe(function (channel) {
                            if (channel.id) {
                                _this.socketService.sendEvent({
                                    userId: toUserId,
                                    channelId: channel.id,
                                }, 'first-direct-message');
                                _this.router.navigate(['channel', channel.id]);
                                _this.activeModal.close();
                            }
                            else {
                                console.log('create channel failed');
                            }
                        })];
                    case 1:
                        incomingChannel = _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ChatDmModalComponent.ctorParameters = function () { return [
        { type: _shared_service_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"] },
        { type: _shared_service_channel_service__WEBPACK_IMPORTED_MODULE_5__["ChannelService"] },
        { type: _shared_service_socket_service__WEBPACK_IMPORTED_MODULE_6__["SocketService"] },
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbActiveModal"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    ChatDmModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chat-dm-modal',
            template: __webpack_require__(/*! raw-loader!./chat-dm-modal.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/chat/chat-dm-modal/chat-dm-modal.component.html"),
            styles: [__webpack_require__(/*! ./chat-dm-modal.component.css */ "./src/app/components/chat/chat-dm-modal/chat-dm-modal.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_service_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"],
            _shared_service_channel_service__WEBPACK_IMPORTED_MODULE_5__["ChannelService"],
            _shared_service_socket_service__WEBPACK_IMPORTED_MODULE_6__["SocketService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbActiveModal"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ChatDmModalComponent);
    return ChatDmModalComponent;
}());



/***/ }),

/***/ "./src/app/components/chat/chat.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/chat/chat.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep nb-layout-column {\n  -webkit-box-pack: center;\n          justify-content: center;\n  display: -webkit-box;\n  display: flex;\n}\nnb-chat {\n  width: 500px;\n  height: 80vw;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jaGF0L2NoYXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHdCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIsb0JBQWE7RUFBYixhQUFhO0FBQ2Y7QUFDQTtFQUNFLFlBQVk7RUFDWixZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NoYXQvY2hhdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIG5iLWxheW91dC1jb2x1bW4ge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbn1cbm5iLWNoYXQge1xuICB3aWR0aDogNTAwcHg7XG4gIGhlaWdodDogODB2dztcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/chat/chat.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/chat/chat.component.ts ***!
  \***************************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/fesm5/index.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _chatsidebar_chatsidebar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chatsidebar/chatsidebar.component */ "./src/app/components/chat/chatsidebar/chatsidebar.component.ts");
/* harmony import */ var _shared_model_action__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/model/action */ "./src/app/components/chat/shared/model/action.ts");
/* harmony import */ var _shared_model_event__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/model/event */ "./src/app/components/chat/shared/model/event.ts");
/* harmony import */ var _shared_service_channel_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/service/channel.service */ "./src/app/components/chat/shared/service/channel.service.ts");
/* harmony import */ var _shared_service_message_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/service/message.service */ "./src/app/components/chat/shared/service/message.service.ts");
/* harmony import */ var _shared_service_socket_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/service/socket.service */ "./src/app/components/chat/shared/service/socket.service.ts");












var AVATAR_URL = 'https://api.adorable.io/avatars/285';
var ChatComponent = /** @class */ (function () {
    function ChatComponent(socketService, sidebarService, authService, messageService, route, channelService, router) {
        this.socketService = socketService;
        this.sidebarService = sidebarService;
        this.authService = authService;
        this.messageService = messageService;
        this.route = route;
        this.channelService = channelService;
        this.router = router;
        this.action = _shared_model_action__WEBPACK_IMPORTED_MODULE_7__["Action"];
        this.messages = [];
        this.generalChannel = {
            name: 'general',
            id: '5d67c349f6f8f916672031f4',
        };
        this.selectedChannel = {};
        this.isTyping = false;
        this.doneTypingInterval = 5000; // time in ms (5 seconds)
    }
    ChatComponent.prototype.ngOnInit = function () {
        this.setChannel();
        this.initModel();
        this.initIoConnection();
    };
    ChatComponent.prototype.getChannlelName = function (name) {
        var _this = this;
        if (!name) {
            return;
        }
        var nameArr = name.split(',');
        if (nameArr.length > 2) {
            return name;
        }
        var filteredArr = nameArr.filter(function (n) { return n !== _this.user.name; });
        if (filteredArr.length === 0) {
            return this.user.name;
        }
        return filteredArr[0];
        // return this.sidebarComp.getChannlelName(name);
    };
    ChatComponent.prototype.setChannel = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.route.params.subscribe(function (params) {
                    var channelId = params['channelId'] ? params['channelId'] : _this.selectedChannel.id;
                    _this.channelService.getChannel(channelId).subscribe(function (incomingChannel) {
                        _this.selectedChannel = incomingChannel;
                        _this.setMessages(channelId);
                        console.log(_this.selectedChannel, 'chat');
                        _this.sidebarComp.addChannel(_this.selectedChannel);
                    });
                });
                return [2 /*return*/];
            });
        });
    };
    ChatComponent.prototype.setMessages = function (channelId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.messageService.getMessages(channelId).subscribe(function (messages) {
                    messages.forEach(function (message) {
                        message.reply = _this.isReply(message);
                    });
                    _this.messages = messages;
                });
                return [2 /*return*/];
            });
        });
    };
    ChatComponent.prototype.toggle = function () {
        this.sidebarService.toggle(false, 'left');
    };
    ChatComponent.prototype.initModel = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.authService.getUser()];
                    case 1:
                        _a.user = _b.sent();
                        this.user.avatar = AVATAR_URL + "/" + this.user.id + ".png";
                        this.socketService.sendEvent(this.user.id, 'init');
                        return [2 /*return*/];
                }
            });
        });
    };
    ChatComponent.prototype.initIoConnection = function () {
        var _this = this;
        this.socketService.initSocket();
        this.ioConnection = this.socketService.onMessage()
            .subscribe(function (message) {
            if (message.channelId === _this.selectedChannel.id) {
                console.log(message);
                console.log('--------------------------');
                message.reply = _this.isReply(message);
                _this.messages.push(message);
            }
        });
        this.socketService.onEvent(_shared_model_event__WEBPACK_IMPORTED_MODULE_8__["Event"].CONNECT)
            .subscribe(function () {
            console.log('socket.io connected');
        });
        this.socketService.onEvent(_shared_model_event__WEBPACK_IMPORTED_MODULE_8__["Event"].DISCONNECT)
            .subscribe(function () {
            console.log('socket.io disconnected');
        });
        this.socketService.onEvent(_shared_model_event__WEBPACK_IMPORTED_MODULE_8__["Event"].START_TYPING)
            .subscribe(function (message) {
            if (message.channelId === _this.selectedChannel.id) {
                console.log('started-typing');
                _this.isTyping = true;
            }
        });
        this.socketService.onEvent(_shared_model_event__WEBPACK_IMPORTED_MODULE_8__["Event"].STOP_TYPING)
            .subscribe(function (message) {
            if (message.channelId === _this.selectedChannel.id) {
                console.log('stopped-typing');
                _this.isTyping = false;
            }
        });
        this.socketService.onEvent(_shared_model_event__WEBPACK_IMPORTED_MODULE_8__["Event"].UPDATE_MESSAGE)
            .subscribe(function (incomingMessage) {
            if (incomingMessage.channelId === _this.selectedChannel.id) {
                _this.incomingUpdateMessage(incomingMessage.id, incomingMessage.text);
            }
        });
        this.socketService.onEvent(_shared_model_event__WEBPACK_IMPORTED_MODULE_8__["Event"].DELETE_MESSAGE)
            .subscribe(function (deletedMessageId) {
            // if (incomingMessage.channelId === this.selectedChannel.id) {
            //   this.incomingUpdateMessage(incomingMessage.id, incomingMessage.text);
            // }
            _this.incomingDeleteMessage(deletedMessageId);
        });
        // todo get rid of
        this.socketService.onEvent(_shared_model_event__WEBPACK_IMPORTED_MODULE_8__["Event"].JOINED)
            .subscribe(function (message) {
            message.quote = _this.user.name + " joined room";
            message.type = 'quote';
            // this.messages.push(message);
        });
    };
    ChatComponent.prototype.incomingUpdateMessage = function (messageId, text) {
        this.updateMessageView(messageId, text);
    };
    ChatComponent.prototype.incomingDeleteMessage = function (messageId) {
        this.deleteMessageView(messageId);
    };
    ChatComponent.prototype.leaveChannel = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var channelId, general;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        channelId = this.selectedChannel.id;
                        return [4 /*yield*/, this.channelService.leaveChannel(channelId).subscribe()];
                    case 1:
                        _a.sent();
                        general = this.sidebarComp.channels.find(function (channel) { return channel.title === 'general'; });
                        this.socketService.sendEvent(channelId, 'leave');
                        this.router.navigate(['channels', channelId]);
                        return [2 /*return*/];
                }
            });
        });
    };
    ChatComponent.prototype.leaveChannelFake = function () {
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('coming soon');
    };
    ChatComponent.prototype.isGeneral = function () {
        return this.selectedChannel.name === 'general';
    };
    ChatComponent.prototype.isReply = function (message) {
        return message.user.name === this.user.name;
    };
    ChatComponent.prototype.keyPress = function () {
        var message = {
            user: this.user.id,
            channelId: this.selectedChannel.id,
        };
        this.socketService.sendEvent(message, 'started-typing');
    };
    ChatComponent.prototype.keyUp = function () {
        clearTimeout(this.typingTimer);
        if (this.chatFormRef.message) {
            this.typingTimer = setTimeout(this.doneTyping.bind(this), this.doneTypingInterval);
        }
    };
    ChatComponent.prototype.doneTyping = function () {
        var message = {
            user: this.user.id,
            channelId: this.selectedChannel.id,
        };
        this.socketService.sendEvent(message, 'stopped-typing');
    };
    ChatComponent.prototype.openEditMessageWindow = function (message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var text;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                            input: 'textarea',
                            inputAttributes: {
                                'aria-label': 'Edit your message here'
                            },
                            inputValue: message.text,
                            confirmButtonText: 'Save',
                            showCancelButton: true
                        })];
                    case 1:
                        text = (_a.sent()).value;
                        if (text) {
                            // ! fix this
                            this.messageService.updateMessage(message.id, text).subscribe(function (data) {
                                console.log(data);
                                _this.socketService.sendEvent(message.id, 'update-message');
                            });
                            this.updateMessageView(message.id, text);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    ChatComponent.prototype.openDeleteMessageWindow = function (message) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
            title: 'Are you sure you want to delete this message?',
            text: 'You won\'t be able to revert this!',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(function (result) {
            if (result.value) {
                _this.messageService.deleteMessage(message.id).subscribe(function (data) {
                    console.log(data);
                });
                _this.socketService.sendEvent(message, 'delete-message');
                _this.deleteMessageView(message.id);
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Deleted!', 'Your file has been deleted.', 'success');
            }
        });
    };
    ChatComponent.prototype.deleteMessageView = function (selectedMessageId) {
        this.messages = this.messages.filter(function (message) {
            return message.id !== selectedMessageId;
        });
    };
    ChatComponent.prototype.updateMessageView = function (selectedMessageId, text) {
        var targetMessage = this.messages.find(function (message) { return message.id === selectedMessageId; });
        targetMessage.text = text;
    };
    ChatComponent.prototype.sendMessage = function (event) {
        var files = !event.files ? [] : event.files.map(function (file) {
            return {
                url: file.src,
                type: file.type,
                icon: 'file-text-outline',
            };
        });
        var message = {
            text: event.message,
            date: Date.now(),
            files: files,
            type: files.length ? 'file' : 'text',
            reply: true,
            user: this.user,
            channelId: this.selectedChannel.id,
        };
        this.socketService.send(message);
        this.messageContent = null;
    };
    ChatComponent.prototype.sendNotification = function (params, action) {
        if (action === _shared_model_action__WEBPACK_IMPORTED_MODULE_7__["Action"].JOINED) {
            var message = {
                user: this.user,
                action: action,
            };
            this.socketService.sendEvent(message, 'joined');
        }
    };
    ChatComponent.ctorParameters = function () { return [
        { type: _shared_service_socket_service__WEBPACK_IMPORTED_MODULE_11__["SocketService"] },
        { type: _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbSidebarService"] },
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
        { type: _shared_service_message_service__WEBPACK_IMPORTED_MODULE_10__["MessageService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _shared_service_channel_service__WEBPACK_IMPORTED_MODULE_9__["ChannelService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_chatsidebar_chatsidebar_component__WEBPACK_IMPORTED_MODULE_6__["ChatsidebarComponent"], { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _chatsidebar_chatsidebar_component__WEBPACK_IMPORTED_MODULE_6__["ChatsidebarComponent"])
    ], ChatComponent.prototype, "sidebarComp", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('chatForm', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbChatFormComponent"])
    ], ChatComponent.prototype, "chatFormRef", void 0);
    ChatComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chat',
            template: __webpack_require__(/*! raw-loader!./chat.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/chat/chat.component.html"),
            styles: [__webpack_require__(/*! ./chat.component.css */ "./src/app/components/chat/chat.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_service_socket_service__WEBPACK_IMPORTED_MODULE_11__["SocketService"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbSidebarService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            _shared_service_message_service__WEBPACK_IMPORTED_MODULE_10__["MessageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _shared_service_channel_service__WEBPACK_IMPORTED_MODULE_9__["ChannelService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ChatComponent);
    return ChatComponent;
}());



/***/ }),

/***/ "./src/app/components/chat/chat.module.ts":
/*!************************************************!*\
  !*** ./src/app/components/chat/chat.module.ts ***!
  \************************************************/
/*! exports provided: ChatModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatModule", function() { return ChatModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/fesm5/index.js");
/* harmony import */ var _chat_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chat.component */ "./src/app/components/chat/chat.component.ts");
/* harmony import */ var _chat_channel_modal_chat_channel_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chat-channel-modal/chat-channel-modal.component */ "./src/app/components/chat/chat-channel-modal/chat-channel-modal.component.ts");
/* harmony import */ var _chat_dm_modal_chat_dm_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./chat-dm-modal/chat-dm-modal.component */ "./src/app/components/chat/chat-dm-modal/chat-dm-modal.component.ts");
/* harmony import */ var _chatsidebar_chatsidebar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./chatsidebar/chatsidebar.component */ "./src/app/components/chat/chatsidebar/chatsidebar.component.ts");
/* harmony import */ var _shared_service_socket_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/service/socket.service */ "./src/app/components/chat/shared/service/socket.service.ts");










var ChatModule = /** @class */ (function () {
    function ChatModule() {
    }
    ChatModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _chat_component__WEBPACK_IMPORTED_MODULE_5__["ChatComponent"],
                _chatsidebar_chatsidebar_component__WEBPACK_IMPORTED_MODULE_8__["ChatsidebarComponent"],
                _chat_dm_modal_chat_dm_modal_component__WEBPACK_IMPORTED_MODULE_7__["ChatDmModalComponent"],
                _chat_channel_modal_chat_channel_modal_component__WEBPACK_IMPORTED_MODULE_6__["ChatChannelModalComponent"],
            ],
            imports: [
                _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbSidebarModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbChatModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbButtonModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbLayoutModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbListModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbUserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbMenuModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbPopoverModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbIconModule"],
            ],
            providers: [_shared_service_socket_service__WEBPACK_IMPORTED_MODULE_9__["SocketService"]],
            entryComponents: [_chat_dm_modal_chat_dm_modal_component__WEBPACK_IMPORTED_MODULE_7__["ChatDmModalComponent"], _chat_channel_modal_chat_channel_modal_component__WEBPACK_IMPORTED_MODULE_6__["ChatChannelModalComponent"]],
        })
    ], ChatModule);
    return ChatModule;
}());



/***/ }),

/***/ "./src/app/components/chat/chatsidebar/chatsidebar.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/components/chat/chatsidebar/chatsidebar.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2hhdC9jaGF0c2lkZWJhci9jaGF0c2lkZWJhci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/chat/chatsidebar/chatsidebar.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/chat/chatsidebar/chatsidebar.component.ts ***!
  \**********************************************************************/
/*! exports provided: ChatsidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatsidebarComponent", function() { return ChatsidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/fesm5/index.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _chat_channel_modal_chat_channel_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../chat-channel-modal/chat-channel-modal.component */ "./src/app/components/chat/chat-channel-modal/chat-channel-modal.component.ts");
/* harmony import */ var _chat_dm_modal_chat_dm_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../chat-dm-modal/chat-dm-modal.component */ "./src/app/components/chat/chat-dm-modal/chat-dm-modal.component.ts");
/* harmony import */ var _shared_model_event__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/model/event */ "./src/app/components/chat/shared/model/event.ts");
/* harmony import */ var _shared_service_channel_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/service/channel.service */ "./src/app/components/chat/shared/service/channel.service.ts");
/* harmony import */ var _shared_service_socket_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/service/socket.service */ "./src/app/components/chat/shared/service/socket.service.ts");











var ChatsidebarComponent = /** @class */ (function () {
    function ChatsidebarComponent(channelService, menuService, socketService, authService, modalService, activatedRoute) {
        this.channelService = channelService;
        this.menuService = menuService;
        this.socketService = socketService;
        this.authService = authService;
        this.modalService = modalService;
        this.activatedRoute = activatedRoute;
        this.channelsAndDirectMessages = [];
        this.channels = [];
        this.directMessages = [];
        this.items = [
            {
                title: 'channels',
                expanded: true,
                children: this.channels,
            },
            {
                title: 'direct messages',
                expanded: true,
                children: this.directMessages,
            },
        ];
    }
    ChatsidebarComponent.prototype.ngOnInit = function () {
        this.initChannels();
        this.initIoConnection();
        this.initUser();
    };
    ChatsidebarComponent.prototype.initUser = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.authService.getUser()];
                    case 1:
                        _a.user = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ChatsidebarComponent.prototype.openWindow = function (name) {
        if (name === 'channels') {
            this.modalService.open(_chat_channel_modal_chat_channel_modal_component__WEBPACK_IMPORTED_MODULE_6__["ChatChannelModalComponent"]);
        }
        else {
            this.modalService.open(_chat_dm_modal_chat_dm_modal_component__WEBPACK_IMPORTED_MODULE_7__["ChatDmModalComponent"]);
        }
    };
    ChatsidebarComponent.prototype.initIoConnection = function () {
        var _this = this;
        // todo check if the channel is already there
        this.socketService.onEvent(_shared_model_event__WEBPACK_IMPORTED_MODULE_8__["Event"].FIRST_DM)
            .subscribe(function (channelId) {
            _this.channelService.getChannel(channelId).subscribe(function (channel) {
                _this.addChannel(channel);
            });
            _this.socketService.sendEvent(_this.user.id, 'init');
        });
    };
    ChatsidebarComponent.prototype.getChannlelName = function (name) {
        var _this = this;
        var nameArr = name.split(',');
        if (nameArr.length > 2) {
            return name;
        }
        var filteredArr = nameArr.filter(function (n) { return n !== _this.user.name; });
        if (filteredArr.length === 0) {
            return this.user.name;
        }
        return filteredArr[0];
    };
    ChatsidebarComponent.prototype.initChannels = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.channelService.getChannels().subscribe(function (channels) {
                    channels.forEach(function (channel) {
                        _this.addChannel(channel);
                    });
                });
                return [2 /*return*/];
            });
        });
    };
    ChatsidebarComponent.prototype.addChannel = function (incomingChannel) {
        var currentChannel = this.channelsAndDirectMessages.find(function (channel) {
            return channel.id === incomingChannel.id;
        });
        if (currentChannel) {
            console.log('exist');
            return;
        }
        if (incomingChannel.type === 'directMessage') {
            var newDirectMessage = {
                title: this.getChannlelName(incomingChannel.name),
                link: "/channel/" + incomingChannel.id,
            };
            this.directMessages.push(newDirectMessage);
        }
        else if (incomingChannel.type === 'channel') {
            var newChannel = {
                title: incomingChannel.name,
                link: "/channel/" + incomingChannel.id,
            };
            this.channels.push(newChannel);
        }
        this.channelsAndDirectMessages.push(incomingChannel);
    };
    ChatsidebarComponent.ctorParameters = function () { return [
        { type: _shared_service_channel_service__WEBPACK_IMPORTED_MODULE_9__["ChannelService"] },
        { type: _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbMenuService"] },
        { type: _shared_service_socket_service__WEBPACK_IMPORTED_MODULE_10__["SocketService"] },
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    ChatsidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chatsidebar',
            template: __webpack_require__(/*! raw-loader!./chatsidebar.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/chat/chatsidebar/chatsidebar.component.html"),
            styles: [__webpack_require__(/*! ./chatsidebar.component.css */ "./src/app/components/chat/chatsidebar/chatsidebar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_service_channel_service__WEBPACK_IMPORTED_MODULE_9__["ChannelService"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbMenuService"],
            _shared_service_socket_service__WEBPACK_IMPORTED_MODULE_10__["SocketService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ChatsidebarComponent);
    return ChatsidebarComponent;
}());



/***/ }),

/***/ "./src/app/components/chat/shared/model/action.ts":
/*!********************************************************!*\
  !*** ./src/app/components/chat/shared/model/action.ts ***!
  \********************************************************/
/*! exports provided: Action */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Action", function() { return Action; });
var Action;
(function (Action) {
    Action[Action["JOINED"] = 0] = "JOINED";
    Action[Action["LEFT"] = 1] = "LEFT";
})(Action || (Action = {}));


/***/ }),

/***/ "./src/app/components/chat/shared/model/event.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/chat/shared/model/event.ts ***!
  \*******************************************************/
/*! exports provided: Event */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Event", function() { return Event; });
var Event;
(function (Event) {
    Event["CONNECT"] = "connect";
    Event["DISCONNECT"] = "disconnect";
    Event["START_TYPING"] = "started-typing";
    Event["STOP_TYPING"] = "stopped-typing";
    Event["JOINED"] = "joined";
    Event["FIRST_DM"] = "first-direct-message";
    Event["UPDATE_MESSAGE"] = "update-message";
    Event["DELETE_MESSAGE"] = "delete-message";
})(Event || (Event = {}));


/***/ }),

/***/ "./src/app/components/chat/shared/service/channel.service.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/chat/shared/service/channel.service.ts ***!
  \*******************************************************************/
/*! exports provided: ChannelService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChannelService", function() { return ChannelService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/auth.service */ "./src/app/services/auth.service.ts");





var ChannelService = /** @class */ (function () {
    function ChannelService(http, authService) {
        this.http = http;
        this.authService = authService;
    }
    ChannelService.prototype.setSelectedChannel = function (channel) {
        this.selectedChannel = channel;
    };
    ChannelService.prototype.getChannels = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers = headers.set('Authorization', this.authService.getToken());
        headers = headers.set('Content-Type', 'application/json');
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiPrefix + "/v1/channels", { headers: headers });
    };
    ChannelService.prototype.getAllChannels = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers = headers.set('Authorization', this.authService.getToken());
        headers = headers.set('Content-Type', 'application/json');
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiPrefix + "/v1/channels/all", { headers: headers });
    };
    ChannelService.prototype.getChannel = function (channelId) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers = headers.set('Authorization', this.authService.getToken());
        headers = headers.set('Content-Type', 'application/json');
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiPrefix + "/v1/channels/" + channelId, { headers: headers });
    };
    ChannelService.prototype.joinChannel = function (channelId) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers = headers.set('Authorization', this.authService.getToken());
        headers = headers.set('Content-Type', 'application/json');
        return this.http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiPrefix + "/v1/channels/" + channelId + "/join", {}, { headers: headers });
    };
    ChannelService.prototype.leaveChannel = function (channelId) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers = headers.set('Authorization', this.authService.getToken());
        headers = headers.set('Content-Type', 'application/json');
        return this.http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiPrefix + "/v1/channels/" + channelId + "/leave", {}, { headers: headers });
    };
    ChannelService.prototype.createChannel = function (name, usersInChannel, type) {
        var channel = { name: name, usersInChannel: usersInChannel, type: type };
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers = headers.set('Authorization', this.authService.getToken());
        headers = headers.set('Content-Type', 'application/json');
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiPrefix + "/v1/channels", channel, { headers: headers });
    };
    ChannelService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
    ]; };
    ChannelService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], ChannelService);
    return ChannelService;
}());



/***/ }),

/***/ "./src/app/components/chat/shared/service/message.service.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/chat/shared/service/message.service.ts ***!
  \*******************************************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/auth.service */ "./src/app/services/auth.service.ts");





var MessageService = /** @class */ (function () {
    function MessageService(http, authService) {
        this.http = http;
        this.authService = authService;
        // ! hacky way to expose the function...
        this.updateMessage = this.updateMessage;
        this.deleteMessage = this.deleteMessage;
    }
    MessageService.prototype.getMessages = function (channelId) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers = headers.set('Authorization', this.authService.getToken());
        headers = headers.set('Content-Type', 'application/json');
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiPrefix + "/v1/messages/" + channelId, { headers: headers });
    };
    MessageService.prototype.updateMessage = function (messageId, text) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers = headers.set('Authorization', this.authService.getToken());
        headers = headers.set('Content-Type', 'application/json');
        return this.http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiPrefix + "/v1/messages/" + messageId, { text: text }, { headers: headers });
    };
    MessageService.prototype.deleteMessage = function (messageId) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers = headers.set('Authorization', this.authService.getToken());
        headers = headers.set('Content-Type', 'application/json');
        return this.http.delete(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiPrefix + "/v1/messages/" + messageId, { headers: headers });
    };
    MessageService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
    ]; };
    MessageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], MessageService);
    return MessageService;
}());



/***/ }),

/***/ "./src/app/components/chat/shared/service/socket.service.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/chat/shared/service/socket.service.ts ***!
  \******************************************************************/
/*! exports provided: SocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketService", function() { return SocketService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../environments/environment */ "./src/environments/environment.ts");





var apiURL = "" + _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl;
var socketIoUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].socketIoUrl;
var SocketService = /** @class */ (function () {
    function SocketService() {
    }
    SocketService.prototype.initSocket = function () {
        // ! change back
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_3___default()(socketIoUrl);
        // this is used for docker env
        // default to host for example: 'http://localhost:3050'
        // this.socket = socketIo('http://localhost:5000');
    };
    SocketService.prototype.sendEvent = function (message, event) {
        this.socket.emit(event, message);
    };
    SocketService.prototype.send = function (message) {
        this.socket.emit('message', message);
    };
    SocketService.prototype.onMessage = function () {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _this.socket.on('message', function (data) { return observer.next(data); });
        });
    };
    SocketService.prototype.onEvent = function (event) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _this.socket.on(event, function (data) { return observer.next(data); });
        });
    };
    SocketService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SocketService);
    return SocketService;
}());



/***/ }),

/***/ "./src/app/components/chat/shared/service/user.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/chat/shared/service/user.service.ts ***!
  \****************************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/auth.service */ "./src/app/services/auth.service.ts");





var UserService = /** @class */ (function () {
    function UserService(http, authService) {
        this.http = http;
        this.authService = authService;
    }
    UserService.prototype.getUsers = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers = headers.set('Authorization', this.authService.getToken());
        headers = headers.set('Content-Type', 'application/json');
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiPrefix + "/users/v1/all", { headers: headers });
    };
    UserService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
    ]; };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/components/chatbot/chatbot.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/chatbot/chatbot.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2hhdGJvdC9jaGF0Ym90LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/chatbot/chatbot.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/chatbot/chatbot.component.ts ***!
  \*********************************************************/
/*! exports provided: ChatbotComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatbotComponent", function() { return ChatbotComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var dialogflowURL = "https://us-central1-chatbot-8b2c3.cloudfunctions.net/dialogflowgateway ";
var ChatbotComponent = /** @class */ (function () {
    function ChatbotComponent(http) {
        this.http = http;
        this.messages = [];
        this.loading = false;
        // Random ID to maintain session with server
        this.sessionId = Math.random().toString(36).slice(-5);
    }
    ChatbotComponent.prototype.ngOnInit = function () {
        this.addBotMessage('Human presence detected 🤖. How can I help you? ');
    };
    ChatbotComponent.prototype.handleUserMessage = function (event) {
        var _this = this;
        console.log(event);
        var text = event.message;
        this.addUserMessage(text);
        this.loading = true;
        // Make an HTTP Request
        this.http.post(dialogflowURL, {
            sessionId: this.sessionId,
            queryInput: {
                // event: {
                //   name: 'USER_ONBOARDING',
                //   languageCode: 'en-US'
                // },
                text: {
                    text: text,
                    languageCode: 'en-US'
                }
            }
        })
            .subscribe(function (res) {
            _this.addBotMessage(res.fulfillmentText);
            _this.loading = false;
        });
    };
    // Helpers
    ChatbotComponent.prototype.addUserMessage = function (text) {
        this.messages.push({
            text: text,
            sender: 'You',
            reply: true,
            date: new Date()
        });
    };
    ChatbotComponent.prototype.addBotMessage = function (text) {
        this.messages.push({
            text: text,
            sender: 'Bot',
            avatar: '/assets/bot.jpeg',
            date: new Date()
        });
    };
    ChatbotComponent.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    ChatbotComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-chatbot',
            template: __webpack_require__(/*! raw-loader!./chatbot.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/chatbot/chatbot.component.html"),
            styles: [__webpack_require__(/*! ./chatbot.component.scss */ "./src/app/components/chatbot/chatbot.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ChatbotComponent);
    return ChatbotComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.ts ***!
  \*************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");



var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
        // This is the default title property created by the angular cli. Its responsible for the app works
        this.dashBoardTitle = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].dashBoardTitle;
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/components/dashboard/dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/forgot-password/forgot-password.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/forgot-password/forgot-password.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  margin: 0;\n  color: #6a6f8c;\n  background: #c8c8c8;\n  font: 600 16px/18px 'Open Sans', sans-serif;\n}\n*,\n:after,\n:before {\n  box-sizing: border-box;\n}\n.clearfix:after,\n.clearfix:before {\n  content: '';\n  display: table;\n}\n.clearfix:after {\n  clear: both;\n  display: block;\n}\na {\n  color: inherit;\n  text-decoration: none;\n}\n.login-wrap {\n  border-radius: 25px;\n  width: 100%;\n  margin: auto;\n  max-width: 525px;\n  min-height: 670px;\n  position: relative;\n  /* background:url(https://raw.githubusercontent.com/khadkamhn/day-01-login-form/master/img/bg.jpg) no-repeat center; */\n  /* background:url('../../../assets/img/web-page-background-color-funycoloring-coloring-pages-for-kids-12888-coloring-pages-for-adults.jpg'); */\n  box-shadow: 0 12px 15px 0 rgba(0, 0, 0, 0.24),\n    0 17px 50px 0 rgba(0, 0, 0, 0.19);\n}\n.login-html {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  padding: 50px 70px 50px 70px;\n  background: rgba(215, 217, 218, 0.9);\n}\n.login-html .sign-in-htm,\n.login-html .sign-up-htm {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  -webkit-transform: rotateY(180deg);\n          transform: rotateY(180deg);\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  -webkit-transition: all 0.4s linear;\n  transition: all 0.4s linear;\n}\n.login-form .group .check {\n  display: none;\n}\n.login-html .tab,\n.login-form .group .label,\n.login-form .group .button {\n  text-transform: uppercase;\n  font-size: 22px;\n}\n.login-html .tab {\n  font-size: 22px;\n  margin-right: 15px;\n  padding-bottom: 5px;\n  margin: 0 15px 10px 0;\n  display: inline-block;\n  border-bottom: 2px solid transparent;\n}\n.login-html .sign-in:checked + .tab,\n.login-html .sign-up:checked + .tab {\n  color: #fff;\n  border-color: #fb5757;\n}\n.login-form {\n  min-height: 345px;\n  position: relative;\n  -webkit-perspective: 1000px;\n          perspective: 1000px;\n  -webkit-transform-style: preserve-3d;\n          transform-style: preserve-3d;\n}\n.login-form .group {\n  margin-bottom: 15px;\n}\n.login-form .group .label,\n.login-form .group .input,\n.login-form .group .button {\n  width: 100%;\n  color: #fff;\n  display: block;\n}\n.login-form .group .input,\n.login-form .group .button {\n  border: none;\n  padding: 10px 10px;\n  border-radius: 15px;\n  background: rgba(7, 7, 7, 0.1);\n}\n.login-form .group input[data-type='password'] {\n  text-security: circle;\n  -webkit-text-security: circle;\n}\n.login-form .group .label {\n  color: rgb(41, 39, 39);\n  font-size: 12px;\n}\n.login-form .group .button {\n  background: #1161ee;\n}\n.login-form .group label .icon {\n  width: 15px;\n  height: 15px;\n  border-radius: 2px;\n  position: relative;\n  display: inline-block;\n  background: rgba(255, 255, 255, 0.1);\n}\n.login-form .group label .icon:before,\n.login-form .group label .icon:after {\n  content: '';\n  width: 10px;\n  height: 2px;\n  background: #fff;\n  position: absolute;\n  -webkit-transition: all 0.2s ease-in-out 0s;\n  transition: all 0.2s ease-in-out 0s;\n}\n.login-form .group label .icon:before {\n  left: 3px;\n  width: 5px;\n  bottom: 6px;\n  -webkit-transform: scale(0) rotate(0);\n          transform: scale(0) rotate(0);\n}\n.login-form .group label .icon:after {\n  top: 6px;\n  right: 0;\n  -webkit-transform: scale(0) rotate(0);\n          transform: scale(0) rotate(0);\n}\n.login-form .group .check:checked + label {\n  color: #fff;\n}\n.login-form .group .check:checked + label .icon {\n  background: #1161ee;\n}\n.login-form .group .check:checked + label .icon:before {\n  -webkit-transform: scale(1) rotate(45deg);\n          transform: scale(1) rotate(45deg);\n}\n.login-form .group .check:checked + label .icon:after {\n  -webkit-transform: scale(1) rotate(-45deg);\n          transform: scale(1) rotate(-45deg);\n}\n.login-html\n  .sign-in:checked\n  + .tab\n  + .sign-up\n  + .tab\n  + .login-form\n  .sign-in-htm {\n  -webkit-transform: rotate(0);\n          transform: rotate(0);\n}\n.login-html .sign-up:checked + .tab + .login-form .sign-up-htm {\n  -webkit-transform: rotate(0);\n          transform: rotate(0);\n}\n.hr {\n  height: 2px;\n  margin: 40px 0 20px 0;\n  background: #fb5757;\n}\n.foot-lnk {\n  text-align: center;\n}\nform {\n  display: -webkit-inline-box;\n  display: inline-flex;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb3Jnb3QtcGFzc3dvcmQvZm9yZ290LXBhc3N3b3JkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxTQUFTO0VBQ1QsY0FBYztFQUNkLG1CQUFtQjtFQUNuQiwyQ0FBMkM7QUFDN0M7QUFDQTs7O0VBR0Usc0JBQXNCO0FBQ3hCO0FBQ0E7O0VBRUUsV0FBVztFQUNYLGNBQWM7QUFDaEI7QUFDQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxjQUFjO0VBQ2QscUJBQXFCO0FBQ3ZCO0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsV0FBVztFQUNYLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixzSEFBc0g7RUFDdEgsOElBQThJO0VBQzlJO3FDQUNtQztBQUNyQztBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsNEJBQTRCO0VBQzVCLG9DQUFvQztBQUN0QztBQUNBOztFQUVFLE1BQU07RUFDTixPQUFPO0VBQ1AsUUFBUTtFQUNSLFNBQVM7RUFDVCxrQkFBa0I7RUFDbEIsa0NBQTBCO1VBQTFCLDBCQUEwQjtFQUMxQixtQ0FBMkI7VUFBM0IsMkJBQTJCO0VBQzNCLG1DQUEyQjtFQUEzQiwyQkFBMkI7QUFDN0I7QUFFQTtFQUNFLGFBQWE7QUFDZjtBQUNBOzs7RUFHRSx5QkFBeUI7RUFDekIsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLHFCQUFxQjtFQUNyQixvQ0FBb0M7QUFDdEM7QUFDQTs7RUFFRSxXQUFXO0VBQ1gscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLDJCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsb0NBQTRCO1VBQTVCLDRCQUE0QjtBQUM5QjtBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBQ0E7OztFQUdFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsY0FBYztBQUNoQjtBQUNBOztFQUVFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLDhCQUE4QjtBQUNoQztBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLDZCQUE2QjtBQUMvQjtBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLGVBQWU7QUFDakI7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixvQ0FBb0M7QUFDdEM7QUFDQTs7RUFFRSxXQUFXO0VBQ1gsV0FBVztFQUNYLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLDJDQUFtQztFQUFuQyxtQ0FBbUM7QUFDckM7QUFDQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1YsV0FBVztFQUNYLHFDQUE2QjtVQUE3Qiw2QkFBNkI7QUFDL0I7QUFDQTtFQUNFLFFBQVE7RUFDUixRQUFRO0VBQ1IscUNBQTZCO1VBQTdCLDZCQUE2QjtBQUMvQjtBQUNBO0VBQ0UsV0FBVztBQUNiO0FBQ0E7RUFDRSxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLHlDQUFpQztVQUFqQyxpQ0FBaUM7QUFDbkM7QUFDQTtFQUNFLDBDQUFrQztVQUFsQyxrQ0FBa0M7QUFDcEM7QUFDQTs7Ozs7OztFQU9FLDRCQUFvQjtVQUFwQixvQkFBb0I7QUFDdEI7QUFDQTtFQUNFLDRCQUFvQjtVQUFwQixvQkFBb0I7QUFDdEI7QUFFQTtFQUNFLFdBQVc7RUFDWCxxQkFBcUI7RUFDckIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLDJCQUFvQjtFQUFwQixvQkFBb0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2ZvcmdvdC1wYXNzd29yZC9mb3Jnb3QtcGFzc3dvcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiAjNmE2ZjhjO1xuICBiYWNrZ3JvdW5kOiAjYzhjOGM4O1xuICBmb250OiA2MDAgMTZweC8xOHB4ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xufVxuKixcbjphZnRlcixcbjpiZWZvcmUge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuLmNsZWFyZml4OmFmdGVyLFxuLmNsZWFyZml4OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICcnO1xuICBkaXNwbGF5OiB0YWJsZTtcbn1cbi5jbGVhcmZpeDphZnRlciB7XG4gIGNsZWFyOiBib3RoO1xuICBkaXNwbGF5OiBibG9jaztcbn1cbmEge1xuICBjb2xvcjogaW5oZXJpdDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4ubG9naW4td3JhcCB7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IGF1dG87XG4gIG1heC13aWR0aDogNTI1cHg7XG4gIG1pbi1oZWlnaHQ6IDY3MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIC8qIGJhY2tncm91bmQ6dXJsKGh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9raGFka2FtaG4vZGF5LTAxLWxvZ2luLWZvcm0vbWFzdGVyL2ltZy9iZy5qcGcpIG5vLXJlcGVhdCBjZW50ZXI7ICovXG4gIC8qIGJhY2tncm91bmQ6dXJsKCcuLi8uLi8uLi9hc3NldHMvaW1nL3dlYi1wYWdlLWJhY2tncm91bmQtY29sb3ItZnVueWNvbG9yaW5nLWNvbG9yaW5nLXBhZ2VzLWZvci1raWRzLTEyODg4LWNvbG9yaW5nLXBhZ2VzLWZvci1hZHVsdHMuanBnJyk7ICovXG4gIGJveC1zaGFkb3c6IDAgMTJweCAxNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjI0KSxcbiAgICAwIDE3cHggNTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XG59XG4ubG9naW4taHRtbCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcGFkZGluZzogNTBweCA3MHB4IDUwcHggNzBweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyMTUsIDIxNywgMjE4LCAwLjkpO1xufVxuLmxvZ2luLWh0bWwgLnNpZ24taW4taHRtLFxuLmxvZ2luLWh0bWwgLnNpZ24tdXAtaHRtIHtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGxpbmVhcjtcbn1cblxuLmxvZ2luLWZvcm0gLmdyb3VwIC5jaGVjayB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4ubG9naW4taHRtbCAudGFiLFxuLmxvZ2luLWZvcm0gLmdyb3VwIC5sYWJlbCxcbi5sb2dpbi1mb3JtIC5ncm91cCAuYnV0dG9uIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAyMnB4O1xufVxuLmxvZ2luLWh0bWwgLnRhYiB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICBtYXJnaW46IDAgMTVweCAxMHB4IDA7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xufVxuLmxvZ2luLWh0bWwgLnNpZ24taW46Y2hlY2tlZCArIC50YWIsXG4ubG9naW4taHRtbCAuc2lnbi11cDpjaGVja2VkICsgLnRhYiB7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXItY29sb3I6ICNmYjU3NTc7XG59XG4ubG9naW4tZm9ybSB7XG4gIG1pbi1oZWlnaHQ6IDM0NXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBlcnNwZWN0aXZlOiAxMDAwcHg7XG4gIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG59XG4ubG9naW4tZm9ybSAuZ3JvdXAge1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuLmxvZ2luLWZvcm0gLmdyb3VwIC5sYWJlbCxcbi5sb2dpbi1mb3JtIC5ncm91cCAuaW5wdXQsXG4ubG9naW4tZm9ybSAuZ3JvdXAgLmJ1dHRvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBjb2xvcjogI2ZmZjtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4ubG9naW4tZm9ybSAuZ3JvdXAgLmlucHV0LFxuLmxvZ2luLWZvcm0gLmdyb3VwIC5idXR0b24ge1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDEwcHggMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgYmFja2dyb3VuZDogcmdiYSg3LCA3LCA3LCAwLjEpO1xufVxuLmxvZ2luLWZvcm0gLmdyb3VwIGlucHV0W2RhdGEtdHlwZT0ncGFzc3dvcmQnXSB7XG4gIHRleHQtc2VjdXJpdHk6IGNpcmNsZTtcbiAgLXdlYmtpdC10ZXh0LXNlY3VyaXR5OiBjaXJjbGU7XG59XG4ubG9naW4tZm9ybSAuZ3JvdXAgLmxhYmVsIHtcbiAgY29sb3I6IHJnYig0MSwgMzksIDM5KTtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLmxvZ2luLWZvcm0gLmdyb3VwIC5idXR0b24ge1xuICBiYWNrZ3JvdW5kOiAjMTE2MWVlO1xufVxuLmxvZ2luLWZvcm0gLmdyb3VwIGxhYmVsIC5pY29uIHtcbiAgd2lkdGg6IDE1cHg7XG4gIGhlaWdodDogMTVweDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xufVxuLmxvZ2luLWZvcm0gLmdyb3VwIGxhYmVsIC5pY29uOmJlZm9yZSxcbi5sb2dpbi1mb3JtIC5ncm91cCBsYWJlbCAuaWNvbjphZnRlciB7XG4gIGNvbnRlbnQ6ICcnO1xuICB3aWR0aDogMTBweDtcbiAgaGVpZ2h0OiAycHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQgMHM7XG59XG4ubG9naW4tZm9ybSAuZ3JvdXAgbGFiZWwgLmljb246YmVmb3JlIHtcbiAgbGVmdDogM3B4O1xuICB3aWR0aDogNXB4O1xuICBib3R0b206IDZweDtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKSByb3RhdGUoMCk7XG59XG4ubG9naW4tZm9ybSAuZ3JvdXAgbGFiZWwgLmljb246YWZ0ZXIge1xuICB0b3A6IDZweDtcbiAgcmlnaHQ6IDA7XG4gIHRyYW5zZm9ybTogc2NhbGUoMCkgcm90YXRlKDApO1xufVxuLmxvZ2luLWZvcm0gLmdyb3VwIC5jaGVjazpjaGVja2VkICsgbGFiZWwge1xuICBjb2xvcjogI2ZmZjtcbn1cbi5sb2dpbi1mb3JtIC5ncm91cCAuY2hlY2s6Y2hlY2tlZCArIGxhYmVsIC5pY29uIHtcbiAgYmFja2dyb3VuZDogIzExNjFlZTtcbn1cbi5sb2dpbi1mb3JtIC5ncm91cCAuY2hlY2s6Y2hlY2tlZCArIGxhYmVsIC5pY29uOmJlZm9yZSB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMSkgcm90YXRlKDQ1ZGVnKTtcbn1cbi5sb2dpbi1mb3JtIC5ncm91cCAuY2hlY2s6Y2hlY2tlZCArIGxhYmVsIC5pY29uOmFmdGVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKSByb3RhdGUoLTQ1ZGVnKTtcbn1cbi5sb2dpbi1odG1sXG4gIC5zaWduLWluOmNoZWNrZWRcbiAgKyAudGFiXG4gICsgLnNpZ24tdXBcbiAgKyAudGFiXG4gICsgLmxvZ2luLWZvcm1cbiAgLnNpZ24taW4taHRtIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMCk7XG59XG4ubG9naW4taHRtbCAuc2lnbi11cDpjaGVja2VkICsgLnRhYiArIC5sb2dpbi1mb3JtIC5zaWduLXVwLWh0bSB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDApO1xufVxuXG4uaHIge1xuICBoZWlnaHQ6IDJweDtcbiAgbWFyZ2luOiA0MHB4IDAgMjBweCAwO1xuICBiYWNrZ3JvdW5kOiAjZmI1NzU3O1xufVxuLmZvb3QtbG5rIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5mb3JtIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/forgot-password/forgot-password.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/forgot-password/forgot-password.component.ts ***!
  \*************************************************************************/
/*! exports provided: ForgotPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function() { return ForgotPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");





var ForgotPasswordComponent = /** @class */ (function () {
    function ForgotPasswordComponent(authService, activeModal) {
        this.authService = authService;
        this.activeModal = activeModal;
    }
    ForgotPasswordComponent.prototype.ngOnInit = function () {
    };
    ForgotPasswordComponent.prototype.sendResetPasswordEmail = function () {
        var _this = this;
        var email = this.email;
        return this.authService.forgotPassword(email).subscribe(function (data) {
            if (data.success) {
                // alert('please check your email');
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire('Good job!', 'please check your email', 'success');
                _this.activeModal.close();
                return true;
            }
            else {
                // alert('something is wrong, please resend');
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                    type: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                    footer: '<a href>Why do I have this issue?</a>'
                });
                return false;
            }
        });
    };
    ForgotPasswordComponent.ctorParameters = function () { return [
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"] }
    ]; };
    ForgotPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-forgot-password',
            template: __webpack_require__(/*! raw-loader!./forgot-password.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/forgot-password/forgot-password.component.html"),
            styles: [__webpack_require__(/*! ./forgot-password.component.css */ "./src/app/components/forgot-password/forgot-password.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"]])
    ], ForgotPasswordComponent);
    return ForgotPasswordComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  max-width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gIG1heC13aWR0aDogMTAwJTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _signin_signup_signin_signup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../signin-signup/signin-signup.component */ "./src/app/components/signin-signup/signin-signup.component.ts");






var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(authService, modalService, router) {
        this.authService = authService;
        this.modalService = modalService;
        this.router = router;
        this.userMenu = [{ title: 'Profile' }, { title: 'Log out' }];
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.initUser();
    };
    NavbarComponent.prototype.initUser = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.authService.getUser()];
                    case 1:
                        _a.user = _b.sent();
                        this.user.picture = 'assets/images/yiren.png';
                        return [2 /*return*/];
                }
            });
        });
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.router.navigate(['/']);
        return false;
    };
    NavbarComponent.prototype.openSignUpModal = function () {
        this.modalService.open(_signin_signup_signin_signup_component__WEBPACK_IMPORTED_MODULE_5__["SigninSignupComponent"]);
    };
    NavbarComponent.ctorParameters = function () { return [
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/profile/profile.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/profile/profile.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* USER PROFILE PAGE */\n.card {\n    margin-top: 20px;\n    padding: 30px;\n    background-color: rgba(214, 224, 226, 0.2);\n    -moz-border-top-left-radius:5px;\n    border-top-left-radius:5px;\n    -moz-border-top-right-radius:5px;\n    border-top-right-radius:5px;\n    box-sizing: border-box;\n}\n.card.hovercard {\n    position: relative;\n    padding-top: 0;\n    overflow: hidden;\n    text-align: center;\n    background-color: #fff;\n    background-color: rgba(255, 255, 255, 1);\n}\n.card.hovercard .card-background {\n    height: 130px;\n}\n.card-background img {\n    -webkit-filter: blur(25px);\n    -moz-filter: blur(25px);\n    -o-filter: blur(25px);\n    -ms-filter: blur(25px);\n    filter: blur(25px);\n    margin-left: -100px;\n    margin-top: -200px;\n    min-width: 130%;\n}\n.card.hovercard .useravatar {\n    position: absolute;\n    top: 15px;\n    left: 0;\n    right: 0;\n}\n.card.hovercard .useravatar img {\n    width: 100px;\n    height: 100px;\n    max-width: 100px;\n    max-height: 100px;\n    border-radius: 50%;\n    border: 5px solid rgba(255, 255, 255, 0.5);\n}\n.card.hovercard .card-info {\n    position: absolute;\n    bottom: 14px;\n    left: 0;\n    right: 0;\n}\n.card.hovercard .card-info .card-title {\n    padding:0 5px;\n    font-size: 20px;\n    line-height: 1;\n    color: #262626;\n    background-color: rgba(255, 255, 255, 0.1);\n    border-radius: 4px;\n}\n.card.hovercard .card-info {\n    overflow: hidden;\n    font-size: 12px;\n    line-height: 20px;\n    color: #737373;\n    text-overflow: ellipsis;\n}\n.card.hovercard .bottom {\n    padding: 0 20px;\n    margin-bottom: 17px;\n}\n.btn-pref .btn {\n    -webkit-border-radius:0 !important;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxzQkFBc0I7QUFDdEI7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLDBDQUEwQztJQUUxQywrQkFBK0I7SUFDL0IsMEJBQTBCO0lBRTFCLGdDQUFnQztJQUNoQywyQkFBMkI7SUFHM0Isc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLHdDQUF3QztBQUM1QztBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksMEJBQTBCO0lBQzFCLHVCQUF1QjtJQUN2QixxQkFBcUI7SUFDckIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsT0FBTztJQUNQLFFBQVE7QUFDWjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBR2pCLGtCQUFrQjtJQUNsQiwwQ0FBMEM7QUFDOUM7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osT0FBTztJQUNQLFFBQVE7QUFDWjtBQUNBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7SUFDZixjQUFjO0lBQ2QsY0FBYztJQUNkLDBDQUEwQztJQUcxQyxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCx1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLGVBQWU7SUFDZixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGtDQUFrQztBQUN0QyIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBVU0VSIFBST0ZJTEUgUEFHRSAqL1xuLmNhcmQge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgcGFkZGluZzogMzBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIxNCwgMjI0LCAyMjYsIDAuMik7XG4gICAgLXdlYmtpdC1ib3JkZXItdG9wLWxlZnQtcmFkaXVzOjVweDtcbiAgICAtbW96LWJvcmRlci10b3AtbGVmdC1yYWRpdXM6NXB4O1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6NXB4O1xuICAgIC13ZWJraXQtYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6NXB4O1xuICAgIC1tb3otYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6NXB4O1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOjVweDtcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG4uY2FyZC5ob3ZlcmNhcmQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBwYWRkaW5nLXRvcDogMDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XG59XG4uY2FyZC5ob3ZlcmNhcmQgLmNhcmQtYmFja2dyb3VuZCB7XG4gICAgaGVpZ2h0OiAxMzBweDtcbn1cbi5jYXJkLWJhY2tncm91bmQgaW1nIHtcbiAgICAtd2Via2l0LWZpbHRlcjogYmx1cigyNXB4KTtcbiAgICAtbW96LWZpbHRlcjogYmx1cigyNXB4KTtcbiAgICAtby1maWx0ZXI6IGJsdXIoMjVweCk7XG4gICAgLW1zLWZpbHRlcjogYmx1cigyNXB4KTtcbiAgICBmaWx0ZXI6IGJsdXIoMjVweCk7XG4gICAgbWFyZ2luLWxlZnQ6IC0xMDBweDtcbiAgICBtYXJnaW4tdG9wOiAtMjAwcHg7XG4gICAgbWluLXdpZHRoOiAxMzAlO1xufVxuLmNhcmQuaG92ZXJjYXJkIC51c2VyYXZhdGFyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxNXB4O1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG59XG4uY2FyZC5ob3ZlcmNhcmQgLnVzZXJhdmF0YXIgaW1nIHtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICBtYXgtd2lkdGg6IDEwMHB4O1xuICAgIG1heC1oZWlnaHQ6IDEwMHB4O1xuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIC1tb3otYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBib3JkZXI6IDVweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG59XG4uY2FyZC5ob3ZlcmNhcmQgLmNhcmQtaW5mbyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMTRweDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xufVxuLmNhcmQuaG92ZXJjYXJkIC5jYXJkLWluZm8gLmNhcmQtdGl0bGUge1xuICAgIHBhZGRpbmc6MCA1cHg7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgIGNvbG9yOiAjMjYyNjI2O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG4uY2FyZC5ob3ZlcmNhcmQgLmNhcmQtaW5mbyB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgY29sb3I6ICM3MzczNzM7XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG4uY2FyZC5ob3ZlcmNhcmQgLmJvdHRvbSB7XG4gICAgcGFkZGluZzogMCAyMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDE3cHg7XG59XG4uYnRuLXByZWYgLmJ0biB7XG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOjAgIWltcG9ydGFudDtcbn1cblxuIl19 */"

/***/ }),

/***/ "./src/app/components/profile/profile.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/profile/profile.component.ts ***!
  \*********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");




var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    ProfileComponent.ctorParameters = function () { return [
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/components/profile/profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/signin-signup/signin-signup.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/signin-signup/signin-signup.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  margin: 0;\n  color: #6a6f8c;\n  background: #c8c8c8;\n  font: 600 16px/18px 'Open Sans', sans-serif;\n}\n*,\n:after,\n:before {\n  box-sizing: border-box;\n}\n.clearfix:after,\n.clearfix:before {\n  content: '';\n  display: table;\n}\n.clearfix:after {\n  clear: both;\n  display: block;\n}\na {\n  color: inherit;\n  text-decoration: none;\n}\n.login-wrap {\n  border-radius: 25px;\n  width: 100%;\n  margin: auto;\n  max-width: 525px;\n  min-height: 670px;\n  position: relative;\n  /* background:url(https://raw.githubusercontent.com/khadkamhn/day-01-login-form/master/img/bg.jpg) no-repeat center; */\n  /* background:url('../../../assets/img/web-page-background-color-funycoloring-coloring-pages-for-kids-12888-coloring-pages-for-adults.jpg'); */\n  box-shadow: 0 12px 15px 0 rgba(0, 0, 0, 0.24),\n    0 17px 50px 0 rgba(0, 0, 0, 0.19);\n}\n.login-html {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  padding: 50px 70px 50px 70px;\n  background: rgba(215, 217, 218, 0.9);\n}\n.login-html .sign-in-htm,\n.login-html .sign-up-htm {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  -webkit-transform: rotateY(180deg);\n          transform: rotateY(180deg);\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  -webkit-transition: all 0.4s linear;\n  transition: all 0.4s linear;\n}\n.login-html .sign-in,\n.login-html .sign-up,\n.login-form .group .check {\n  display: none;\n}\n.login-html .tab,\n.login-form .group .label,\n.login-form .group .button {\n  text-transform: uppercase;\n  font-size: 22px;\n}\n.login-html .tab {\n  font-size: 22px;\n  margin-right: 15px;\n  padding-bottom: 5px;\n  margin: 0 15px 10px 0;\n  display: inline-block;\n  border-bottom: 2px solid transparent;\n}\n.login-html .sign-in:checked + .tab,\n.login-html .sign-up:checked + .tab {\n  color: #fff;\n  border-color: #fb5757;\n}\n.login-form {\n  min-height: 345px;\n  position: relative;\n  -webkit-perspective: 1000px;\n          perspective: 1000px;\n  -webkit-transform-style: preserve-3d;\n          transform-style: preserve-3d;\n}\n.login-form .group {\n  margin-bottom: 15px;\n}\n.login-form .group .label,\n.login-form .group .input,\n.login-form .group .button {\n  width: 100%;\n  color: #fff;\n  display: block;\n}\n.login-form .group .input,\n.login-form .group .button {\n  border: none;\n  padding: 10px 10px;\n  border-radius: 15px;\n  background: rgba(7, 7, 7, 0.1);\n}\n.login-form .group input[data-type='password'] {\n  text-security: circle;\n  -webkit-text-security: circle;\n}\n.login-form .group .label {\n  color: rgb(41, 39, 39);\n  font-size: 12px;\n}\n.login-form .group .button {\n  background: #1161ee;\n}\n.login-form .group label .icon {\n  width: 15px;\n  height: 15px;\n  border-radius: 2px;\n  position: relative;\n  display: inline-block;\n  background: rgba(255, 255, 255, 0.1);\n}\n.login-form .group label .icon:before,\n.login-form .group label .icon:after {\n  content: '';\n  width: 10px;\n  height: 2px;\n  background: #fff;\n  position: absolute;\n  -webkit-transition: all 0.2s ease-in-out 0s;\n  transition: all 0.2s ease-in-out 0s;\n}\n.login-form .group label .icon:before {\n  left: 3px;\n  width: 5px;\n  bottom: 6px;\n  -webkit-transform: scale(0) rotate(0);\n          transform: scale(0) rotate(0);\n}\n.login-form .group label .icon:after {\n  top: 6px;\n  right: 0;\n  -webkit-transform: scale(0) rotate(0);\n          transform: scale(0) rotate(0);\n}\n.login-form .group .check:checked + label {\n  color: #fff;\n}\n.login-form .group .check:checked + label .icon {\n  background: #1161ee;\n}\n.login-form .group .check:checked + label .icon:before {\n  -webkit-transform: scale(1) rotate(45deg);\n          transform: scale(1) rotate(45deg);\n}\n.login-form .group .check:checked + label .icon:after {\n  -webkit-transform: scale(1) rotate(-45deg);\n          transform: scale(1) rotate(-45deg);\n}\n.login-html\n  .sign-in:checked\n  + .tab\n  + .sign-up\n  + .tab\n  + .login-form\n  .sign-in-htm {\n  -webkit-transform: rotate(0);\n          transform: rotate(0);\n}\n.login-html .sign-up:checked + .tab + .login-form .sign-up-htm {\n  -webkit-transform: rotate(0);\n          transform: rotate(0);\n}\n.hr {\n  height: 2px;\n  margin: 40px 0 20px 0;\n  background: #fb5757;\n}\n.foot-lnk {\n  text-align: center;\n}\nform {\n  display: -webkit-inline-box;\n  display: inline-flex;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaWduaW4tc2lnbnVwL3NpZ25pbi1zaWdudXAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFNBQVM7RUFDVCxjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLDJDQUEyQztBQUM3QztBQUNBOzs7RUFHRSxzQkFBc0I7QUFDeEI7QUFDQTs7RUFFRSxXQUFXO0VBQ1gsY0FBYztBQUNoQjtBQUNBO0VBQ0UsV0FBVztFQUNYLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGNBQWM7RUFDZCxxQkFBcUI7QUFDdkI7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLHNIQUFzSDtFQUN0SCw4SUFBOEk7RUFDOUk7cUNBQ21DO0FBQ3JDO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQiw0QkFBNEI7RUFDNUIsb0NBQW9DO0FBQ3RDO0FBQ0E7O0VBRUUsTUFBTTtFQUNOLE9BQU87RUFDUCxRQUFRO0VBQ1IsU0FBUztFQUNULGtCQUFrQjtFQUNsQixrQ0FBMEI7VUFBMUIsMEJBQTBCO0VBQzFCLG1DQUEyQjtVQUEzQiwyQkFBMkI7RUFDM0IsbUNBQTJCO0VBQTNCLDJCQUEyQjtBQUM3QjtBQUNBOzs7RUFHRSxhQUFhO0FBQ2Y7QUFDQTs7O0VBR0UseUJBQXlCO0VBQ3pCLGVBQWU7QUFDakI7QUFDQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQixxQkFBcUI7RUFDckIsb0NBQW9DO0FBQ3RDO0FBQ0E7O0VBRUUsV0FBVztFQUNYLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQiwyQkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLG9DQUE0QjtVQUE1Qiw0QkFBNEI7QUFDOUI7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUNBOzs7RUFHRSxXQUFXO0VBQ1gsV0FBVztFQUNYLGNBQWM7QUFDaEI7QUFDQTs7RUFFRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQiw4QkFBOEI7QUFDaEM7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQiw2QkFBNkI7QUFDL0I7QUFDQTtFQUNFLHNCQUFzQjtFQUN0QixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsb0NBQW9DO0FBQ3RDO0FBQ0E7O0VBRUUsV0FBVztFQUNYLFdBQVc7RUFDWCxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQiwyQ0FBbUM7RUFBbkMsbUNBQW1DO0FBQ3JDO0FBQ0E7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLFdBQVc7RUFDWCxxQ0FBNkI7VUFBN0IsNkJBQTZCO0FBQy9CO0FBQ0E7RUFDRSxRQUFRO0VBQ1IsUUFBUTtFQUNSLHFDQUE2QjtVQUE3Qiw2QkFBNkI7QUFDL0I7QUFDQTtFQUNFLFdBQVc7QUFDYjtBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSx5Q0FBaUM7VUFBakMsaUNBQWlDO0FBQ25DO0FBQ0E7RUFDRSwwQ0FBa0M7VUFBbEMsa0NBQWtDO0FBQ3BDO0FBQ0E7Ozs7Ozs7RUFPRSw0QkFBb0I7VUFBcEIsb0JBQW9CO0FBQ3RCO0FBQ0E7RUFDRSw0QkFBb0I7VUFBcEIsb0JBQW9CO0FBQ3RCO0FBRUE7RUFDRSxXQUFXO0VBQ1gscUJBQXFCO0VBQ3JCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSwyQkFBb0I7RUFBcEIsb0JBQW9CO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zaWduaW4tc2lnbnVwL3NpZ25pbi1zaWdudXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiAjNmE2ZjhjO1xuICBiYWNrZ3JvdW5kOiAjYzhjOGM4O1xuICBmb250OiA2MDAgMTZweC8xOHB4ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xufVxuKixcbjphZnRlcixcbjpiZWZvcmUge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuLmNsZWFyZml4OmFmdGVyLFxuLmNsZWFyZml4OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICcnO1xuICBkaXNwbGF5OiB0YWJsZTtcbn1cbi5jbGVhcmZpeDphZnRlciB7XG4gIGNsZWFyOiBib3RoO1xuICBkaXNwbGF5OiBibG9jaztcbn1cbmEge1xuICBjb2xvcjogaW5oZXJpdDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4ubG9naW4td3JhcCB7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IGF1dG87XG4gIG1heC13aWR0aDogNTI1cHg7XG4gIG1pbi1oZWlnaHQ6IDY3MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIC8qIGJhY2tncm91bmQ6dXJsKGh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9raGFka2FtaG4vZGF5LTAxLWxvZ2luLWZvcm0vbWFzdGVyL2ltZy9iZy5qcGcpIG5vLXJlcGVhdCBjZW50ZXI7ICovXG4gIC8qIGJhY2tncm91bmQ6dXJsKCcuLi8uLi8uLi9hc3NldHMvaW1nL3dlYi1wYWdlLWJhY2tncm91bmQtY29sb3ItZnVueWNvbG9yaW5nLWNvbG9yaW5nLXBhZ2VzLWZvci1raWRzLTEyODg4LWNvbG9yaW5nLXBhZ2VzLWZvci1hZHVsdHMuanBnJyk7ICovXG4gIGJveC1zaGFkb3c6IDAgMTJweCAxNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjI0KSxcbiAgICAwIDE3cHggNTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XG59XG4ubG9naW4taHRtbCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcGFkZGluZzogNTBweCA3MHB4IDUwcHggNzBweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyMTUsIDIxNywgMjE4LCAwLjkpO1xufVxuLmxvZ2luLWh0bWwgLnNpZ24taW4taHRtLFxuLmxvZ2luLWh0bWwgLnNpZ24tdXAtaHRtIHtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGxpbmVhcjtcbn1cbi5sb2dpbi1odG1sIC5zaWduLWluLFxuLmxvZ2luLWh0bWwgLnNpZ24tdXAsXG4ubG9naW4tZm9ybSAuZ3JvdXAgLmNoZWNrIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5sb2dpbi1odG1sIC50YWIsXG4ubG9naW4tZm9ybSAuZ3JvdXAgLmxhYmVsLFxuLmxvZ2luLWZvcm0gLmdyb3VwIC5idXR0b24ge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDIycHg7XG59XG4ubG9naW4taHRtbCAudGFiIHtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gIG1hcmdpbjogMCAxNXB4IDEwcHggMDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XG59XG4ubG9naW4taHRtbCAuc2lnbi1pbjpjaGVja2VkICsgLnRhYixcbi5sb2dpbi1odG1sIC5zaWduLXVwOmNoZWNrZWQgKyAudGFiIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlci1jb2xvcjogI2ZiNTc1Nztcbn1cbi5sb2dpbi1mb3JtIHtcbiAgbWluLWhlaWdodDogMzQ1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGVyc3BlY3RpdmU6IDEwMDBweDtcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbn1cbi5sb2dpbi1mb3JtIC5ncm91cCB7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG4ubG9naW4tZm9ybSAuZ3JvdXAgLmxhYmVsLFxuLmxvZ2luLWZvcm0gLmdyb3VwIC5pbnB1dCxcbi5sb2dpbi1mb3JtIC5ncm91cCAuYnV0dG9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGNvbG9yOiAjZmZmO1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5sb2dpbi1mb3JtIC5ncm91cCAuaW5wdXQsXG4ubG9naW4tZm9ybSAuZ3JvdXAgLmJ1dHRvbiB7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogMTBweCAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDcsIDcsIDcsIDAuMSk7XG59XG4ubG9naW4tZm9ybSAuZ3JvdXAgaW5wdXRbZGF0YS10eXBlPSdwYXNzd29yZCddIHtcbiAgdGV4dC1zZWN1cml0eTogY2lyY2xlO1xuICAtd2Via2l0LXRleHQtc2VjdXJpdHk6IGNpcmNsZTtcbn1cbi5sb2dpbi1mb3JtIC5ncm91cCAubGFiZWwge1xuICBjb2xvcjogcmdiKDQxLCAzOSwgMzkpO1xuICBmb250LXNpemU6IDEycHg7XG59XG4ubG9naW4tZm9ybSAuZ3JvdXAgLmJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6ICMxMTYxZWU7XG59XG4ubG9naW4tZm9ybSAuZ3JvdXAgbGFiZWwgLmljb24ge1xuICB3aWR0aDogMTVweDtcbiAgaGVpZ2h0OiAxNXB4O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG59XG4ubG9naW4tZm9ybSAuZ3JvdXAgbGFiZWwgLmljb246YmVmb3JlLFxuLmxvZ2luLWZvcm0gLmdyb3VwIGxhYmVsIC5pY29uOmFmdGVyIHtcbiAgY29udGVudDogJyc7XG4gIHdpZHRoOiAxMHB4O1xuICBoZWlnaHQ6IDJweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dCAwcztcbn1cbi5sb2dpbi1mb3JtIC5ncm91cCBsYWJlbCAuaWNvbjpiZWZvcmUge1xuICBsZWZ0OiAzcHg7XG4gIHdpZHRoOiA1cHg7XG4gIGJvdHRvbTogNnB4O1xuICB0cmFuc2Zvcm06IHNjYWxlKDApIHJvdGF0ZSgwKTtcbn1cbi5sb2dpbi1mb3JtIC5ncm91cCBsYWJlbCAuaWNvbjphZnRlciB7XG4gIHRvcDogNnB4O1xuICByaWdodDogMDtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKSByb3RhdGUoMCk7XG59XG4ubG9naW4tZm9ybSAuZ3JvdXAgLmNoZWNrOmNoZWNrZWQgKyBsYWJlbCB7XG4gIGNvbG9yOiAjZmZmO1xufVxuLmxvZ2luLWZvcm0gLmdyb3VwIC5jaGVjazpjaGVja2VkICsgbGFiZWwgLmljb24ge1xuICBiYWNrZ3JvdW5kOiAjMTE2MWVlO1xufVxuLmxvZ2luLWZvcm0gLmdyb3VwIC5jaGVjazpjaGVja2VkICsgbGFiZWwgLmljb246YmVmb3JlIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKSByb3RhdGUoNDVkZWcpO1xufVxuLmxvZ2luLWZvcm0gLmdyb3VwIC5jaGVjazpjaGVja2VkICsgbGFiZWwgLmljb246YWZ0ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpIHJvdGF0ZSgtNDVkZWcpO1xufVxuLmxvZ2luLWh0bWxcbiAgLnNpZ24taW46Y2hlY2tlZFxuICArIC50YWJcbiAgKyAuc2lnbi11cFxuICArIC50YWJcbiAgKyAubG9naW4tZm9ybVxuICAuc2lnbi1pbi1odG0ge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcbn1cbi5sb2dpbi1odG1sIC5zaWduLXVwOmNoZWNrZWQgKyAudGFiICsgLmxvZ2luLWZvcm0gLnNpZ24tdXAtaHRtIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMCk7XG59XG5cbi5ociB7XG4gIGhlaWdodDogMnB4O1xuICBtYXJnaW46IDQwcHggMCAyMHB4IDA7XG4gIGJhY2tncm91bmQ6ICNmYjU3NTc7XG59XG4uZm9vdC1sbmsge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmZvcm0ge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/signin-signup/signin-signup.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/signin-signup/signin-signup.component.ts ***!
  \*********************************************************************/
/*! exports provided: SigninSignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninSignupComponent", function() { return SigninSignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../forgot-password/forgot-password.component */ "./src/app/components/forgot-password/forgot-password.component.ts");










var SigninSignupComponent = /** @class */ (function () {
    function SigninSignupComponent(authService, activeModal, validateService, router, modalService) {
        var _this = this;
        this.authService = authService;
        this.activeModal = activeModal;
        this.validateService = validateService;
        this.router = router;
        this.modalService = modalService;
        this.message = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]('');
        this.rendergreCaptch = function () {
            grecaptcha.render('example3', {
                sitekey: '6LcgnK4UAAAAAMIzYQ241H4rT0RJUSZ_XFB9JcpA',
                theme: 'dark',
                'error-callback': _this.reCaptchaErrorCB,
                callback: _this.reCaptchaCB,
            });
        };
        this.renderGapi = function () {
            if (!gapi) {
                return;
            }
            gapi.signin2.render('gSignIn', {
                theme: 'dark',
                onsuccess: _this.onSignWithGoogle,
                onerror: function (err) {
                    console.log("Google signIn2.render button err: " + err);
                },
            });
        };
        this.signOutGoogle = function () {
            var auth2 = gapi.auth2.getAuthInstance();
            auth2.signOut();
        };
        this.onSignWithGoogle = function (googleUser) {
            var profile = googleUser.getBasicProfile();
            // console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
            // console.log('Name: ' + profile.getName());
            // console.log('Image URL: ' + profile.getImageUrl());
            // console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
            // console.log(googleUser.Zi.access_token);
            var access_token = googleUser.Zi.access_token;
            // The ID token you need to pass to your backend:
            // const id_token = googleUser.getAuthResponse().id_token;
            // console.log("ID Token: " + id_token);
            var signoutElement = document.getElementById('signout');
            signoutElement.innerHTML =
                'Sign out ' + googleUser.getBasicProfile().getName();
            return _this.authService.googleOauth(access_token).subscribe(function (data) {
                console.log(data);
                if (data.token) {
                    _this.authService.storeUserData(data.token, data.user);
                    sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire('Good job!', 'You are signed in!', 'success');
                    _this.router.navigate(['dashboard']);
                    _this.activeModal.close();
                    return true;
                }
                else {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire('Oops...', 'Failed on google oauth.', 'error');
                    return false;
                }
            });
        };
    }
    SigninSignupComponent.prototype.ngOnInit = function () {
        this.rendergreCaptch();
        this.renderGapi();
    };
    SigninSignupComponent.prototype.openForgotModal = function () {
        this.modalService.open(_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_9__["ForgotPasswordComponent"]);
    };
    SigninSignupComponent.prototype.verifyCaptchaV3 = function () {
        var _this = this;
        grecaptcha.ready(function () {
            grecaptcha
                .execute('6Lc9m64UAAAAAK124LL1AU8JY-yI51RFJphhDnuf', {
                action: 'homepage',
            })
                .then(function (token) {
                _this.authService.VerifyReCaptcha(token, 'v3').subscribe(function (data) {
                    console.log(data);
                });
            });
        });
    };
    SigninSignupComponent.prototype.reCaptchaErrorCB = function (err) {
        console.log(err);
        sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire('Oops...', "Failed reCaptcha: " + err, 'error');
    };
    SigninSignupComponent.prototype.reCaptchaCB = function (data) {
        console.log('captcha checked');
    };
    SigninSignupComponent.prototype.verifyCaptchaV2 = function () {
        var token = grecaptcha.getResponse();
        return this.authService.VerifyReCaptcha(token, 'v2').subscribe(function (data) {
            if (!data.success) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire('Oops...', data.msg, 'error');
                grecaptcha.reset();
                return false;
            }
            return true;
        });
    };
    SigninSignupComponent.prototype.onSignIn = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var user;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                // todo
                // this.verifyCaptchaV3();
                this.verifyCaptchaV2();
                user = {
                    email: this.email,
                    password: this.password,
                };
                if (!this.validateService.validateSignIn(user)) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
                        type: 'error',
                        title: 'Oops...',
                        text: 'Please fill out all required fields!',
                        footer: '<a href>Why do I have this issue?</a>'
                    });
                    return [2 /*return*/, false];
                }
                this.authService
                    .authenticateUser(user)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function () {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire('Oops...', 'Bad credentials.', 'error');
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])('Not logged in!');
                }))
                    .subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                        // if (data.success) {
                        //   const is2FaEnabled = true;
                        //   if (is2FaEnabled) {
                        //     await this.verify2fa();
                        //   }
                        //   this.postLogin(data);
                        //   return true;
                        // } else {
                        //   alert(data.msg);
                        //   this.message.next('Request timed out or not authorized');
                        //   return false;
                        // }
                        if (!data) {
                            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
                                type: 'error',
                                title: 'Oops...',
                                text: '2 factor auth failed!',
                                footer: '<a href>Why do I have this issue?</a>'
                            });
                            return [2 /*return*/, false];
                        }
                        this.postLogin(data);
                        return [2 /*return*/, true];
                    });
                }); });
                return [2 /*return*/];
            });
        });
    };
    SigninSignupComponent.prototype.postLogin = function (data) {
        this.authService.storeUserData(data.token, data.user);
        sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire('Good job!', 'You are signed in!', 'success');
        this.router.navigate(['dashboard']);
        this.activeModal.close();
    };
    SigninSignupComponent.prototype.verify2fa = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            return _this.authService.verify2fa(_this.authyToken).subscribe(function (data) {
                resolve();
            });
        });
    };
    SigninSignupComponent.prototype.onSignUp = function () {
        var user = {
            name: this.name,
            email: this.email,
            profileName: this.profileName,
            password: this.password,
        };
        // required fields
        if (!this.validateService.validateSignUp(user)) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
                type: 'error',
                title: 'Oops...',
                text: 'Please fill out all required fields!',
                footer: '<a href>Why do I have this issue?</a>'
            });
            return false;
        }
        // email
        if (!this.validateService.validateEmail(user.email)) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
                type: 'error',
                title: 'Oops...',
                text: 'Please fill out email correctly!',
                footer: '<a href>Why do I have this issue?</a>'
            });
            return false;
        }
        // comfirmpassword
        if (!this.validateService.validateConfirmPassword(this.password, this.confirmpassword)) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
                type: 'error',
                title: 'Oops...',
                text: 'Passwords do not match!',
                footer: '<a href>Why do I have this issue?</a>'
            });
            return false;
        }
        return this.authService.signUpUser(user).subscribe(function (data) {
            if (data.success) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire('Good job!', 'Successful signed up, please confirm your email!', 'success');
                return true;
            }
            else {
                console.log(data);
                sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
                    type: 'error',
                    title: 'Oops...',
                    text: 'signup failed!',
                    footer: '<a href>Why do I have this issue?</a>'
                });
                return false;
            }
        });
    };
    SigninSignupComponent.ctorParameters = function () { return [
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] },
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbActiveModal"] },
        { type: _services_validate_service__WEBPACK_IMPORTED_MODULE_8__["ValidateService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"] }
    ]; };
    SigninSignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signin-signup',
            template: __webpack_require__(/*! raw-loader!./signin-signup.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/signin-signup/signin-signup.component.html"),
            styles: [__webpack_require__(/*! ./signin-signup.component.css */ "./src/app/components/signin-signup/signin-signup.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbActiveModal"],
            _services_validate_service__WEBPACK_IMPORTED_MODULE_8__["ValidateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]])
    ], SigninSignupComponent);
    return SigninSignupComponent;
}());



/***/ }),

/***/ "./src/app/components/upload/upload.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/upload/upload.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXBsb2FkL3VwbG9hZC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/upload/upload.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/upload/upload.component.ts ***!
  \*******************************************************/
/*! exports provided: UploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadComponent", function() { return UploadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-file-upload/ng2-file-upload */ "./node_modules/ng2-file-upload/ng2-file-upload.js");
/* harmony import */ var ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_upload_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/upload.service */ "./src/app/services/upload.service.ts");







var URL = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + "/uploads/image";
var UploadComponent = /** @class */ (function () {
    function UploadComponent(uploadService, el, authService) {
        this.uploadService = uploadService;
        this.el = el;
        this.authService = authService;
        // declare a property called fileuploader and assign it to an instance of a new fileUploader.
        // pass in the Url to be uploaded to, and pass the itemAlais, which would be the name of the //file input when sending the post request.
        this.uploader = new ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_2__["FileUploader"]({
            url: URL,
            itemAlias: 'file',
            authToken: this.authService.getToken(),
        });
        // This is the default title property created by the angular cli. Its responsible for the app works
        this.dashBoardTitle = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].dashBoardTitle;
    }
    UploadComponent.prototype.ngOnInit = function () {
        // override the onAfterAddingfile property of the uploader so it doesn't authenticate with //credentials.
        this.uploader.onAfterAddingFile = function (file) {
            file.withCredentials = false;
        };
        // overide the onCompleteItem property of the uploader so we are
        // able to deal with the server response.
        this.uploader.onCompleteItem = function (item, response, status, headers) {
            console.log('ImageUpload:uploaded:', item, status, response);
        };
        this.uploader.onErrorItem = function (item, response, status, headers) {
            console.log(response);
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire('Oops...', 'Upload failed', 'error');
        };
        this.uploader.onSuccessItem = function (item, response, status, headers) {
            console.log(response);
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire('Good job!', 'Successfully uploaded!', 'success');
        };
    };
    // todo
    UploadComponent.prototype.upload = function () {
        var inputEl = this.el.nativeElement.querySelector('#photo');
        console.log('iam+ ' + inputEl);
        var fileCount = inputEl.files.length;
        var formData = new FormData();
        if (fileCount > 0) { // a file was selected
            for (var i = 0; i < fileCount; i++) {
                formData.append('photo', inputEl.files.item(i));
            }
            this.uploadService.uploadImage(formData).subscribe(function (success) {
                console.log(success); // toDO success._body
            }, function (error) { return console.log(error); });
        }
        alert('All upload success!');
    };
    UploadComponent.ctorParameters = function () { return [
        { type: _services_upload_service__WEBPACK_IMPORTED_MODULE_6__["UploadService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }
    ]; };
    UploadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-upload',
            template: __webpack_require__(/*! raw-loader!./upload.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/upload/upload.component.html"),
            styles: [__webpack_require__(/*! ./upload.component.css */ "./src/app/components/upload/upload.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_upload_service__WEBPACK_IMPORTED_MODULE_6__["UploadService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
    ], UploadComponent);
    return UploadComponent;
}());



/***/ }),

/***/ "./src/app/components/videochat/videochat.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/videochat/videochat.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdmlkZW9jaGF0L3ZpZGVvY2hhdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/videochat/videochat.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/videochat/videochat.component.ts ***!
  \*************************************************************/
/*! exports provided: VideochatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideochatComponent", function() { return VideochatComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var VideochatComponent = /** @class */ (function () {
    function VideochatComponent() {
    }
    VideochatComponent.prototype.ngOnInit = function () {
        this.initPeer();
    };
    VideochatComponent.prototype.initPeer = function () {
        var _this = this;
        var otherVideo = this.otherVideo.nativeElement;
        var myVideo = this.myVideo.nativeElement;
        this.peer = new Peer();
        this.peer.on('open', function (id) {
            _this.myPeerId = _this.peer.id;
            console.log('My peer ID is: ' + id);
        });
        this.peer.on('connection', function (conn) {
            conn.on('data', function (data) {
                // Will print 'hi!'
                console.log(data);
            });
        });
        var n = navigator;
        n.getUserMedia = (n.getUserMedia || n.webkitGetUserMedia || n.mozGetUserMedia || n.msGetUserMedia);
        this.peer.on('call', function (call) {
            n.getUserMedia({ video: { width: 128, height: 72 } }, function (stream) {
                myVideo.srcObject = stream;
                myVideo.play();
            }, function (err) {
                console.log('Failed to get stream', err);
            });
            n.getUserMedia({ video: true, audio: true }, function (stream) {
                call.answer(stream);
                call.on('stream', function (remotestream) {
                    otherVideo.srcObject = remotestream;
                    otherVideo.play();
                });
            }, function (err) {
                console.log('Failed to get stream', err);
            });
        });
    };
    VideochatComponent.prototype.connect = function () {
        var _this = this;
        var conn = this.peer.connect(this.anotherid);
        conn.on('open', function () {
            console.log('peer connected');
            conn.send("message from " + _this.myPeerId);
        });
    };
    VideochatComponent.prototype.videoconnect = function () {
        var otherVideo = this.otherVideo.nativeElement;
        var myVideo = this.myVideo.nativeElement;
        var localvar = this.peer;
        var fname = this.anotherid;
        // var getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
        var n = navigator;
        n.getUserMedia = (n.getUserMedia || n.webkitGetUserMedia || n.mozGetUserMedia || n.msGetUserMedia);
        n.getUserMedia({ video: { width: 128, height: 72 } }, function (stream) {
            myVideo.srcObject = stream;
            myVideo.play();
        }, function (err) {
            console.log('Failed to get stream', err);
        });
        n.getUserMedia({ video: true, audio: true }, function (stream) {
            var call = localvar.call(fname, stream);
            call.on('stream', function (remotestream) {
                // console.log(remotestream);
                otherVideo.srcObject = remotestream;
                otherVideo.play();
            });
        }, function (err) {
            console.log('Failed to get stream', err);
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('othervideo', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], VideochatComponent.prototype, "otherVideo", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('myvideo', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], VideochatComponent.prototype, "myVideo", void 0);
    VideochatComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-videochat',
            template: __webpack_require__(/*! raw-loader!./videochat.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/videochat/videochat.component.html"),
            styles: [__webpack_require__(/*! ./videochat.component.css */ "./src/app/components/videochat/videochat.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], VideochatComponent);
    return VideochatComponent;
}());



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        // Store the attempted URL for redirecting later
        // this.authService.redirectUrl = state.url;
        this.router.navigate(['']);
        return false;
    };
    AuthGuard.ctorParameters = function () { return [
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/page404/page404.component.css":
/*!***********************************************!*\
  !*** ./src/app/page404/page404.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* @import url('https://fonts.googleapis.com/css?family=Roboto+Mono:300,500'); */\n\nhtml, body {\n    width: 100%;\n    height: 100%;\n}\n\nbody {\n    background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/257418/andy-holmes-698828-unsplash.jpg);\n    background-size: cover;\n    background-repeat: no-repeat;\n    min-height: 100vh;\n    min-width: 100vw;\n    font-family: \"Roboto Mono\", \"Liberation Mono\", Consolas, monospace;\n    color: rgba(255,255,255,.87);\n}\n\n.mx-auto {\n    margin-left: auto;\n    margin-right: auto;\n}\n\n.container,\n.container > .row,\n.container > .row > div {\n    height: 100%;\n}\n\n#countUp {\n    margin-top: 200px;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    -webkit-box-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n            align-items: center;\n    height: 100%;\n}\n\n.number {\n    font-size: 4rem;\n    font-weight: 500;\n}\n\n.text {\n    margin: 0 0 1rem;\n    font-weight: 300;\n    text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZTQwNC9wYWdlNDA0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0ZBQWdGOztBQUVoRjtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksMEdBQTBHO0lBQzFHLHNCQUFzQjtJQUN0Qiw0QkFBNEI7SUFDNUIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixrRUFBa0U7SUFDbEUsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTs7O0lBR0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixvQkFBYTtJQUFiLGFBQWE7SUFDYiw0QkFBc0I7SUFBdEIsNkJBQXNCO1lBQXRCLHNCQUFzQjtJQUN0Qix3QkFBdUI7WUFBdkIsdUJBQXVCO0lBQ3ZCLHlCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIsWUFBWTtBQUNoQjs7QUFDQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBR0E7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL3BhZ2U0MDQvcGFnZTQwNC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG8rTW9ubzozMDAsNTAwJyk7ICovXG5cbmh0bWwsIGJvZHkge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuYm9keSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vczMtdXMtd2VzdC0yLmFtYXpvbmF3cy5jb20vcy5jZHBuLmlvLzI1NzQxOC9hbmR5LWhvbG1lcy02OTg4MjgtdW5zcGxhc2guanBnKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgbWluLXdpZHRoOiAxMDB2dztcbiAgICBmb250LWZhbWlseTogXCJSb2JvdG8gTW9ub1wiLCBcIkxpYmVyYXRpb24gTW9ub1wiLCBDb25zb2xhcywgbW9ub3NwYWNlO1xuICAgIGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LC44Nyk7XG59XG5cbi5teC1hdXRvIHtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbi5jb250YWluZXIsXG4uY29udGFpbmVyID4gLnJvdyxcbi5jb250YWluZXIgPiAucm93ID4gZGl2IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbiNjb3VudFVwIHtcbiAgICBtYXJnaW4tdG9wOiAyMDBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG4ubnVtYmVyIHtcbiAgICBmb250LXNpemU6IDRyZW07XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuXG4udGV4dCB7XG4gICAgbWFyZ2luOiAwIDAgMXJlbTtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/page404/page404.component.ts":
/*!**********************************************!*\
  !*** ./src/app/page404/page404.component.ts ***!
  \**********************************************/
/*! exports provided: Page404Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page404Component", function() { return Page404Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Page404Component = /** @class */ (function () {
    function Page404Component() {
    }
    Page404Component.prototype.ngOnInit = function () {
    };
    Page404Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page404',
            template: __webpack_require__(/*! raw-loader!./page404.component.html */ "./node_modules/raw-loader/index.js!./src/app/page404/page404.component.html"),
            styles: [__webpack_require__(/*! ./page404.component.css */ "./src/app/page404/page404.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], Page404Component);
    return Page404Component;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../environments/environment */ "./src/environments/environment.ts");








var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.forgotPassword = function (email) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].apiPrefix + "/users/forgot-password", { email: email }, { headers: headers });
    };
    AuthService.prototype.signUpUser = function (user) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].apiPrefix + "/users/register", user, { headers: headers });
    };
    AuthService.prototype.closeSecondFactorObservables = function (subject, result, timerSubscription) {
        subject.next(result);
        subject.complete();
        timerSubscription.unsubscribe();
    };
    AuthService.prototype.secondFactor = function (authyToken, userEmail) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire('Good job!', 'You enabled 2FA, we sent a push notification to your phone, please check', 'success');
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'authyToken': authyToken,
                'userEmail': userEmail
            })
        };
        var tick = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["timer"])(1000, 1000);
        return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].create(function (subject) {
            var tock = 0;
            var timerSubscription = tick.subscribe(function () {
                tock++;
                _this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].apiPrefix + "/authy/status", httpOptions).subscribe(function (response) {
                    if (response.status === 'approved') {
                        // this.redirectUrl = this.redirectUrl === undefined ? '/' : this.redirectUrl;
                        // this.router.navigate([this.redirectUrl]);
                        _this.closeSecondFactorObservables(subject, response, timerSubscription);
                    }
                    else if (response.status === 'denied') {
                        _this.closeSecondFactorObservables(subject, false, timerSubscription);
                    }
                });
                if (tock === 60) {
                    _this.closeSecondFactorObservables(subject, false, timerSubscription);
                }
            });
        });
    };
    AuthService.prototype.verify2fa = function (authyToken) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        headers.append('authyToken', authyToken);
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].apiPrefix + "/users/authenticate", { headers: headers });
    };
    AuthService.prototype.authenticateUser = function (user) {
        var _this = this;
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].apiPrefix + "/users/authenticate", user, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["flatMap"])(function (response) { return _this.secondFactor(response.authyToken, user.email); }));
    };
    AuthService.prototype.googleOauth = function (access_token) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].apiPrefix + "/users/oauth/google", { access_token: access_token }, { headers: headers });
    };
    AuthService.prototype.VerifyReCaptcha = function (token, route) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        this.authToken = token;
        headers.append('Content-Type', 'application/json');
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].apiPrefix + "/reCaptcha/" + route + "/subscribe", { token: token }, { headers: headers });
    };
    AuthService.prototype.storeUserData = function (token, user) {
        if (token) {
            localStorage.setItem('id_token', token);
            this.authToken = token;
        }
        if (user) {
            localStorage.setItem('user', JSON.stringify(user));
            this.user = user;
        }
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService.prototype.getProfile = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        this.getToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].apiPrefix + "/users/profile", { headers: headers });
    };
    AuthService.prototype.getToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
        return token;
    };
    AuthService.prototype.getUser = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var user;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, JSON.parse(localStorage.getItem('user'))];
                    case 1:
                        user = _a.sent();
                        this.user = user;
                        return [2 /*return*/, user];
                }
            });
        });
    };
    AuthService.prototype.loggedIn = function () {
        if (!localStorage.getItem('id_token')) {
            return false;
        }
        else {
            var helper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtHelperService"]();
            return !helper.isTokenExpired(localStorage.id_token);
        }
    };
    AuthService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/upload.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/upload.service.ts ***!
  \********************************************/
/*! exports provided: UploadService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadService", function() { return UploadService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var UploadService = /** @class */ (function () {
    function UploadService(http, authService) {
        this.http = http;
        this.authService = authService;
    }
    UploadService.prototype.uploadImage = function (data) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]();
        this.authService.getToken();
        headers.append('Authorization', this.authService.authToken);
        headers.append('Content-Type', 'multipart/form-data');
        return this.http.get('uploads/image', { headers: headers });
    };
    UploadService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
    ]; };
    UploadService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], UploadService);
    return UploadService;
}());



/***/ }),

/***/ "./src/app/services/validate.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/validate.service.ts ***!
  \**********************************************/
/*! exports provided: ValidateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidateService", function() { return ValidateService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ValidateService = /** @class */ (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateConfirmPassword = function (password, confirmpassword) {
        return password === confirmpassword;
    };
    ValidateService.prototype.validateSignIn = function (user) {
        return user.email && user.password;
    };
    ValidateService.prototype.validateSignUp = function (user) {
        return user.name && user.email && user.profileName && user.password;
    };
    ValidateService.prototype.validateEmail = function (email) {
        // tslint:disable-next-line:max-line-length
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email));
    };
    ValidateService.prototype.validatePhone = function (phone) {
    };
    ValidateService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ValidateService);
    return ValidateService;
}());



/***/ }),

/***/ "./src/app/shared/nebular/nebular.module.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/nebular/nebular.module.ts ***!
  \**************************************************/
/*! exports provided: NebularModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NebularModule", function() { return NebularModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");



var NebularModule = /** @class */ (function () {
    function NebularModule() {
    }
    NebularModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ]
        })
    ], NebularModule);
    return NebularModule;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _nebular_nebular_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nebular/nebular.module */ "./src/app/shared/nebular/nebular.module.ts");




var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _nebular_nebular_module__WEBPACK_IMPORTED_MODULE_3__["NebularModule"]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
var environment = {
    production: true,
    apiPrefix: '',
    apiUrl: '',
    dashBoardTitle: 'app work in heroku',
    socketIoUrl: '',
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/jamesren/Desktop/git.nosync/authapp/angular-src/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map