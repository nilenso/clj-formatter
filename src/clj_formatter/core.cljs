(ns clj-formatter.core
  (:require [clojure.browser.repl :as repl]
            [cljfmt.core :as cljfmt]))

;; (defonce conn
;;   (repl/connect "http://localhost:9000/repl"))


(let [el (js/document.getElementById "submit-unformatted-code")]
  (.addEventListener el "click" handle-on-format))
