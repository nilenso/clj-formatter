(ns clj-formatter.core
  (:require [clojure.browser.repl :as repl]
            [cljfmt.core :as cljfmt]))

;; (defonce conn
;;   (repl/connect "http://localhost:9000/repl"))


;; (defn debug [elem]
;;   (js/console.log elem)
;;   elem)

(defn get-input-value [dom-query]
  (let [elem (js/document.querySelector dom-query)]
    (.-value elem)))

(defn format-code [unformatted-code]
  (cljfmt/reformat-string unformatted-code))

(defn render-formatted-code [formatted-code]
  (let [output-div (js/document.getElementById "output")]
    (set! (. output-div -innerText) formatted-code)))

(defn handle-on-format [_]
  (-> "#unformatted-code-area"
      get-input-value
      format-code
      render-formatted-code))

(let [el (js/document.getElementById "submit-unformatted-code")]
  (.addEventListener el "click" handle-on-format))
