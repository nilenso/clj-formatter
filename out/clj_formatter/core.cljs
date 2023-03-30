(ns clj-formatter.core
  (:require [clojure.browser.repl :as repl]
            [cljfmt.core :as cljfmt]))

(defonce conn
  (repl/connect "http://localhost:9000/repl"))



;; (def unformatted-clj-str "(defn    run[    opts ]
;; (println \"Hello world, the time is\")
;; (cljfmt/reformat-string \"\"))    ")

(def unformatted-clj-str-2 "(let [x 3
      y 4]
  (+ (* x x) (* y y)))
")

(defn debug [elem]
  (js/console.log elem)
  elem)

(defn get-unformatted-code [dom-query]
  (let [elem (js/document.querySelector dom-query)]
    (.-value elem)))

(defn format-code [unformatted-code]
  (cljfmt/reformat-string unformatted-code))

(defn render-formatted-code [formatted-code]
  (let [output-div (js/document.getElementById "output")]
    (set! (. output-div -innerText) formatted-code)))

(defn handle-on-format [_]
  (-> "#unformatted-code-area"
      get-unformatted-code
      debug
      format-code
      debug
      render-formatted-code))

(let [el (js/document.getElementById "submit-unformatted-code")]
  (println el)
  (.addEventListener el "click" handle-on-format))
