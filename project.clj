(defproject clj-formatter "0.1.0-SNAPSHOT"
  :description "A  simple client side clojure code formatter"
  :url "On your local machine"
  :dependencies [[org.clojure/clojure "1.11.1"]
                 [org.clojure/clojurescript "1.11.60"]
                 [cljfmt/cljfmt "0.9.2"]]
  :jvm-opts ^:replace ["-Xmx1g" "-server"]
  :plugins [[lein-npm "0.6.2"]]
  :npm {:dependencies [[source-map-support "0.4.0"]]}
  :source-paths ["src" "target/classes"]
  :clean-targets [:target-path "out" "release"]
  :target-path "target")
