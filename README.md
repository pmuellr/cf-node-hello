cf-node-hello
================================================================================

A "Hello World" node sample for Cloud Foundry



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

    Server running at http://127.0.0.1:3000/

If instead, you get something like the following, someone is already
using the default port:

    Server running at http://127.0.0.1:3000/
    
    events.js:72
        throw er; // Unhandled 'error' event
                  ^
    Error: listen EADDRINUSE
        at errnoException (net.js:901:11)
        at Server._listen2 (net.js:1039:14)
        at listen (net.js:1061:10)
        at Server.listen (net.js:1127:5)
        ...

To use a different port, set the PORT environment variable

    PORT=3001 node server

Once the server is running, test it by visiting

    http://localhost:3000/some/url


You should see the same content for every URL, which will be

    Hello World



pushing to a Cloud Foundry site
--------------------------------------------------------------------------------

For more information on the basics of pushing apps, see the Cloud Foundry docs:

* *[Getting Started](http://docs.cloudfoundry.com/docs/dotcom/getting-started.html)*
* *[Key Facts About Application Deployment](http://docs.cloudfoundry.com/docs/using/deploying-apps/)*


Assuming you've got your `cf` command set up correctly,
and you've set the appropriate `cf target` and are logged in via `cf login`,
you can push the app to a Cloud Foundry site using

    cf push cf-node-hello-bob

Just hit enter for all the prompts, taking the defaults.

Note that the last token in that command is `cf-node-hello-bob`; this will be
used as the "name" of the app, to be used in future `cf` commands.  It will
also be used as the subdomain of the host name for this app.  

The reason `-bob` was added is that apps are somewhat globally defined, and so 
two users won't be able to deploy the same named app within a Cloud Foundry
site (not quite, but *it's complicated*).  So, 
**use a unique suffix on `cf-node-hello` for the "name"**.

Note that you might want to use a different buildpack, in which case you can
add the `--buildpack` option, like so

    cf push --buildpack https://github.com/heroku/heroku-buildpack-nodejs.git cf-node-hello-bob

That buildpack, in particular, is typically usable with Cloud Foundry as well
as Heroku.  The Cloud Foundry buildpack is based on this one, but tends to lag
in terms of releases, so the Heroku one may be better, stronger, faster.  Your
mileage may vary.  See the Heroku blog post from 2013/12/10
*[Announcing a new and improved Node.js Buildpack](https://blog.heroku.com/archives/2013/12/10/new-node-buildpack)*
for more information.



files
--------------------------------------------------------------------------------

`server.js`

The server written with node.js.  This server was adapted from the 
*[example provided in the node docs](http://nodejs.org/api/synopsis.html)*.

The difference is that the port to use is determined from the environment
variable `PORT`.  See the Cloud Foundry doc
*[Cloud Foundry Environment Variables](http://docs.cloudfoundry.com/docs/using/deploying-apps/environment-variable.html)*
for more information.

---

`.cfignore`

List of file patterns that should **NOT** be uploaded to your Cloud Foundry site.

See the Cloud Foundry doc
*[Key Facts About Application Deployment](http://docs.cloudfoundry.com/docs/using/deploying-apps/)*
for more information.

---

`.gitignore`

List of file patterns that should **NOT** be stored in git.  If you aren't using
git, you don't need this file.  And the contents are personal preference.

See the npm google groups topic
*['node_modules in git' from FAQ](https://groups.google.com/forum/#!topic/npm-/8SRXhD6uMmk)*
for discussion.

---

`package.json`

Standard package.json file for node packages.

See the npm doc
*[package.json](https://npmjs.org/doc/json.html)*
for more information.

---

`Procfile`

Used to indicate the command to start the server.

See the Cloud Foundry doc
*[Key Facts About Application Deployment](http://docs.cloudfoundry.com/docs/using/deploying-apps/)*
and the Heroku doc
*[Process Types and the Procfile](https://devcenter.heroku.com/articles/procfile)*
for more information.

---

`README.md`

This file!

