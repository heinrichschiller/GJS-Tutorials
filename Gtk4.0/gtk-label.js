imports.gi.versions['Gtk'] = '4.0';

const Gtk = imports.gi.Gtk;

let app = new Gtk.Application({ application_id: 'org.gtk.exampleapp' });

app.connect('activate', () => {
    let window = new Gtk.ApplicationWindow({ 
        application: app,
        defaultWidth: 600,
        defaultHeight: 400,
        title: 'Gtk4.0-Label example'
    });

    let label = new Gtk.Label({ label: 'Gtk4.0-Label'});

    window.set_child(label);
    window.present();
});

app.run([]);
