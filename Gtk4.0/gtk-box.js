imports.gi.versions['Gtk'] = '4.0';

const Gtk = imports.gi.Gtk;

const app = new Gtk.Application({ application_id: 'org.gtk.exampleapp'});

app.connect('activate', () => {
    const box = new Gtk.Box({ 
        orientation: Gtk.Orientation.VERTICAL,
        marginTop: 36
    });

    const label = new Gtk.Label({ label: 'Gtk4.0-Box' });

    const button = new Gtk.Button({ label: 'Click Me!' });
    button.connect('clicked', () => {
        log('This button was clicked.')
    })

    box.append(label);
    box.append(button);

    const window = new Gtk.ApplicationWindow({
        application: app,
        defaultWidth: 600,
        defaultHeight: 400,
        title: 'Gtk4.0-Box'
    });

    window.connect('destroy', () => { Gtk.main_quit(); });
    window.set_child(box);
    window.present();
});

app.run([]);
