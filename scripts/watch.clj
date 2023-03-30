(require '[cljs.build.api :as b])

(b/watch "src"
  {:main 'clj-formatter.core
   :output-to "out/clj_formatter.js"
   :output-dir "out"})
