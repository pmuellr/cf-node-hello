cf-node-hello
================================================================================

A "Hello World" node sample for Cloud Foundry.



install
--------------------------------------------------------------------------------

After cloning this project onto your local machine, and `cd`'ing into the
directory, install the dependencies using `npm`, as so:

    $ git clone https://github.com/pmuellr/cf-node-hello.git

        ... git output here ...

    $ cd cf-node-hello

    $ npm install

        ... npm output here ...



run locally
--------------------------------------------------------------------------------

After installing, run the server using

    node server

This should print the following to the console.

    server starting on http://localhost:port/

To use a different port, set the PORT environment variable

    PORT=3001 node server

Once the server is running, test it by visiting

    http://localhost:port/some/url


You should see the same content for every URL, which will be

    Hello World



pushing to a Cloud Foundry site
--------------------------------------------------------------------------------

For more information on the basics of pushing apps, see the Cloud Foundry docs
available at
[Cloud Foundry Developer Guide](http://docs.cloudfoundry.org/devguide/).

You'll also need the `cf` command line tool installed; see
[cf Command Line Interface (CLI)](http://docs.cloudfoundry.org/devguide/installcf/)
for more information.

You will need to make one change to the source files before pushing the
application to Cloud Foundry.  In the `manifest.yml` file, you will need to
change the `host` property to a unique hostname on the default domain the
app will be deployed to.  I always add my initials `pjm` to the end of the
app name.

After logging into your Cloud Foundry provider with `cf target` and `cf login`,
you can push the app to a Cloud Foundry site using

    cf push


files
--------------------------------------------------------------------------------

`server.js`

The server written with node.js.  This server was adapted from the
*[example provided in the node docs](http://nodejs.org/api/synopsis.html)*.

The server uses the [cfenv package](https://www.npmjs.org/package/cfenv)
to access the environmental information for your app when running on Cloud Foundry.

---

`.cfignore`

List of file patterns that should **NOT** be uploaded to your Cloud Foundry site.

---

`.gitignore`

List of file patterns that should **NOT** be stored in git.

---

`package.json`

Standard package.json file for node packages.

---

`manifest.yml`

The Cloud Foundry manifest that describes properties associated with the
deployment of this app.  For more information on manifests, see
[Deploying with Application Manifests](http://docs.cloudfoundry.org/devguide/deploy-apps/manifest.html).

---

`Procfile`

Provides compatibility with Heroku or other PaaS's that use a `Procfile`.

---

`README.md`

This file!
