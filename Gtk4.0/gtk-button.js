imports.gi.versions['Gtk'] = '4.0';

const Gtk = imports.gi.Gtk;

const app = new Gtk.Application({ application_id: 'org.gtk.exampleapp' });

app.connect('activate', () => {
    const window = new Gtk.ApplicationWindow({
        application: app,
        defaultWidth: 600,
        defaultHeight: 400,
        title: 'Gtk4.0-Button'
    });

    const button = new Gtk.Button({ label: 'Click me!' });
    button.connect('clicked', () => {
        log('This button was clicked');
    })

    window.set_child(button);
    window.present();
});

app.run([]);
