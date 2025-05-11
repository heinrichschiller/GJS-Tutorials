imports.gi.versions.Gtk = '4.0';

const Gtk = imports.gi.Gtk;

const app = new Gtk.Application({ application_id: 'org.gtk.exampleapp' });
app.connect('activate', () => {
    const vertical_box = new Gtk.Box({ 
        orientation: Gtk.Orientation.VERTICAL,
        marginTop: 36
    });

    const entry1 = new Gtk.Entry();
    const entry2 = new Gtk.Entry();

    const button = new Gtk.Button({
        label: 'Enter',
    });

    button.connect('clicked', () => {
        let text = entry1.get_text();
        log('Entered in the entry: ', text);

        entry2.set_text(text);
    });

    const window = new Gtk.ApplicationWindow({
        application: app,
        defaultWidth: 600,
        defaultHeight: 400,
        title: 'Gtk4.0-Entry'
    });

    window.connect('destroy', () => {
        log('Quit.');
        Gtk.main_quit();
    });

    vertical_box.append(entry1);
    vertical_box.append(entry2);
    vertical_box.append(button);

    window.set_child(vertical_box);
    window.present();
});

app.run([]);
